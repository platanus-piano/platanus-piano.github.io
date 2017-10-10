#!/bin/bash

#================
# platanus template script
#================


#----------------
# meta data
#----------------

# filenames
adoc=$1
html=$2

# source file timestamp
epoch=`stat -c %Y $adoc`
timestamp=`date -d \@${epoch} +'%F %T'`

# get title
title=`head -n 1 $adoc`


#----------------
# header
#----------------

echo "<!doctype html>"
echo "<meta name='viewport' content='width=device-width, initial-scale=1'>"
echo "<meta charset='utf-8'>"
echo "<link rel='stylesheet' href='/css/main.css'>"
echo "<title>$title : Platanus</title>"

echo "<header>"
echo "<a href='/'><h1>Platanus</h1><h2>東京工業大学プラタナスの会</h2></a>"
echo "</header>"

echo "<p>"
echo "<a href='/'>Top</a> | "
echo "<a href='/member/'>Member</a> | "
echo "<a href='/links/'>Links</a>"
echo "</p>"

#----------------
# contents
#----------------

cat $html


#----------------
# footer
#----------------

echo "<hr>"
echo "<footer><p>last update (this page) <br> ${timestamp} (JST)</p></footer>"
