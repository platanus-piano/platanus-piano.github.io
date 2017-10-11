#!/bin/bash

export PWD=`pwd`

yamls=`find ./archive -name 'data.yml'`
parallel ./yaml2json '<' {} '>' {//}/data.json ::: $yamls
jsons=`find ./archive -name 'data.json'`

jq --slurp '.' $jsons > all.json

#----------------
# concert
#----------------

jq -r '.[].path' all.json > paths
function concert() {
    path=$PWD/archive$1

    # images
    echo > $path/imgs
    parallel echo "image::"{/}"[]" '>>' $path/imgs ::: `find $path -iname '*.jpg'`

    # program
    jq -r \
        '.program[] | . as $program |
        "* \(.name) / \(.composer)" as $title |
        .player | map(to_entries[] | .["key"] as $key | .["value"] as $name | "\($key) \($name)") | reduce .[] as $item (""; . + "** "+ $item + "\n") | . as $players |
        "\($title)\n\($players)"'\
        $path/data.json > $path/program
}
export -f concert
parallel --no-notice concert :::: paths

#----------------
# composer
#----------------

jq -r '[.[].program[].composer] | unique | .[] | . as $composer | @uri "/archive/composer/\(.)/" | "* link:\(.)[\($composer)]"' all.json > archive/composer/data

#----------------
# player
#----------------

jq -r '[.[].program[].player[] | .[]] | unique | .[] | . as $player | @uri "/archive/player/\(.)/" | "* link:\(.)[\($player)]"' all.json > archive/player/data

#parallel rm {} ::: $jsons
