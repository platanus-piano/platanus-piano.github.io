#!/bin/bash

yamls=`find ./archive -name 'data.yml'`
parallel ./yaml2json '<' {} '>' {//}/data.json ::: $yamls
jsons=`find ./archive -name 'data.json'`

jq -r --slurp '[.[].program[].composer] | unique | .[] | . as $composer | @uri "/archive/composer/\(.)/" | " * link:\(.)[\($composer)]"' $jsons > archive/composer/composer

parallel rm {} ::: $jsons
