#!/bin/bash

export PWD=`pwd`

yamls=`find ./archive -name 'program.yml'`
parallel ./yaml2json '<' {} '>' {//}/program.json ::: $yamls
jsons=`find ./archive -name 'program.json'`

jq --slurp -c '.' $jsons > all.json



#----------------
# concert {{{
#----------------

jq -r '.[].path' all.json > paths
function concert() {
    path=$PWD/archive$1

    name=`jq -r '.name' $path/program.json`
    date=`jq -r '.date' $path/program.json`

    # index.adoc

    echo -e "= $name\n" > $path/index.adoc
    echo -e "== $name\n" >> $path/index.adoc
    echo -e "**日時** $date\n" >> $path/index.adoc
    echo -e "=== プログラム\n" >> $path/index.adoc
    echo -e "include::program[]\n" >> $path/index.adoc
    echo -e "=== 写真\n" >> $path/index.adoc
    echo -e "include::imgs[]\n" >> $path/index.adoc

    # images
    echo > $path/imgs
    parallel echo "image::"{/}"[]" '>>' $path/imgs ::: `find $path -iname '*.jpg'`

    # program
    jq -r \
        '.program[] | . as $program |
        "* **\(.name)** / \(.composer)" as $title |
        .player | map(to_entries[] | .["key"] as $key | .["value"] as $name | "\($key) \($name)") |
        reduce .[] as $item (""; . + "** "+ $item + "\n") | . as $players |
        "\($title)\n\($players)"'\
        $path/program.json > $path/program
}
export -f concert
parallel --no-notice concert :::: paths
# }}}



#----------------
# composer
#----------------

jq -r '[.[].program[].composer] | unique | .[] | . as $name | @uri "\(.)" as $name_uri | "* link:/archive/composer/?name=\($name_uri)[\($name)]"' all.json > archive/composer/list

jq -c '[.[] | . as $concert | .program[] ] | group_by(.composer)' all.json > archive/composer/data.json



#----------------
# player
#----------------

jq -r '[.[].program[].player[] | .[]] | unique | .[] | . as $name | @uri "\(.)" as $name_uri | "* link:/archive/player/?name=\($name_uri)[\($name)]"' all.json > archive/player/list

jq -c '[.[] | . as $concert | .program[] | . as $program | .player[] | to_entries[] | {name: .value, concert_name: $concert.name, concert_path: $concert.path, program: $program}] | [group_by(.name)[] | {name : (.[0].name), program: .}]' all.json > archive/player/data.json


rm all.json
