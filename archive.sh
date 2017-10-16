#!/bin/bash

jq '[. | keys[] as $id | .[$id] | .["id"] = $id]' archive/all.json > archive/all_id.json



#----------------
# concert
#----------------

jq '[.[] | del(.program)] | group_by(.year) | reverse' archive/all_id.json > archive/concert/data.json



#----------------
# composer
#----------------

jq '[.[] | .["id"] as $id | .program[] | .["id"] = $id | . ] | group_by(.composer)' archive/all_id.json > archive/composer/data.json



#----------------
# player
#----------------

jq '[.[] | .["id"] as $id | .program[] | .["id"] = $id | . as $playing | .players[] | .name as $player_name | $playing | .["player_name"] = $player_name | .] | group_by(.player_name)' archive/all_id.json > archive/player/data.json
