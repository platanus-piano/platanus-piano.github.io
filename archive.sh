#!/bin/bash

jq 'sort_by(.year, .month, .day) | reverse | [. | keys[] as $id | .[$id] | .["id"] = $id]' archive/all.json > archive/all_id.json



#----------------
# concert
#----------------

jq '[.[] | del(.program)] | group_by(.year) | reverse' archive/all_id.json > archive/concert/data.json



#----------------
# composer
#----------------

jq '[.[] | . as $concert | .program[] | .["id"] = $concert.id | .["concert_name"] = $concert.name | .["year"] = $concert.year | . ] | group_by(.composer)' archive/all_id.json > archive/composer/data.json


#----------------
# player
#----------------

jq '[.[] | . as $concert | .program[] | .["id"] = $concert.id | .["concert_name"] = $concert.name | .["year"] = $concert.year | . as $playing | .players[] | .name as $player_name | $playing | .["player_name"] = $player_name | .] | group_by(.player_name)' archive/all_id.json > archive/player/data.json
