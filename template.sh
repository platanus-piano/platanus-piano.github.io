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
page_epoch=`stat -c %Y $adoc`
page_timestamp=`date -d \@${page_epoch} +'%F %T'`
data_epoch=`stat -c %Y archive/all.json`
data_timestamp=`date -d \@${data_epoch} +'%F %T'`

# get title
title=`head -n 1 $adoc`
title=${title:2}


#----------------
# header
#----------------

echo "<!doctype html>"
echo "<meta name='viewport' content='width=device-width, initial-scale=1'>"
echo "<meta charset='utf-8'>"
echo "<link rel='shortcut icon' type='image/png' href='/img/favicon.png'/>"
echo "<script src="/js/jquery-3.2.1.min.js"></script>"
echo "<script src="/js/main.js"></script>"
echo "<link rel='stylesheet' href='/css/main.css'>"
echo "<title>$title : Platanus</title>"


echo "<!-- Global site tag (gtag.js) - Google Analytics -->"
echo "<script async src='https://www.googletagmanager.com/gtag/js?id=UA-115735054-1'></script>"
echo "<script>"
echo "  window.dataLayer = window.dataLayer || [];"
echo "  function gtag(){dataLayer.push(arguments);}"
echo "  gtag('js', new Date());"
echo "  gtag('config', 'UA-115735054-1');"
echo "</script>"

echo "<header>"
echo "<a href='/'><h1>Platanus</h1><h3>東工大ピアノ・アンサンブルサークル</h3></a>"
echo "</header>"

echo "<p>"
echo "<strong><a href='/'>Top</a></strong> | "
echo "<strong><a href='/archive/'>Archive</a></strong> | "
echo "<strong><a href='/member/'>Member</a></strong> | "
echo "<strong><a href='/links/'>Links</a></strong>"
echo "</p>"

#----------------
# contents
#----------------

cat $html


#----------------
# footer
#----------------

echo "<hr>"
echo "<footer><p>"
echo "<a href='https://docs.google.com/forms/d/1LWg2af8o1BzJTdzeYCLAcNGUVktlALSeZSZVzc-0Bxo/viewform?usp=send_form'>お問い合わせ(Google Forms)</a><br>"
echo "Last update<br>"
echo "${page_timestamp} (JST) (this page) <br>"
echo "${data_timestamp} (JST) (archive data)"
echo "</p></footer>"
