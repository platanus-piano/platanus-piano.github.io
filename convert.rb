require 'asciidoctor'
require 'date'
require 'fileutils'

filename = ARGV[0]
document = Asciidoctor.load_file(filename)

#----------------
# header
#----------------

puts "<!doctype html>"
puts "<meta name='viewport' content='width=device-width, initial-scale=1'>"
puts "<meta charset='utf-8'>"
puts "<link rel='shortcut icon' type='image/png' href='/img/favicon.png'/>"
puts "<script src='/js/jquery-3.2.1.min.js'></script>"
puts "<script src='/js/main.js'></script>"
puts "<link rel='stylesheet' href='/css/main.css'>"
puts "<title>#{document.doctitle} : Platanus</title>"


puts "<!-- Global site tag (gtag.js) - Google Analytics -->"
puts "<script async src='https://www.googletagmanager.com/gtag/js?id=UA-115735054-1'></script>"
puts "<script>"
puts "  window.dataLayer = window.dataLayer || [];"
puts "  function gtag(){dataLayer.push(arguments);}"
puts "  gtag('js', new Date());"
puts "  gtag('config', 'UA-115735054-1');"
puts "</script>"

puts "<header>"
puts "<a href='/'><h1>Platanus</h1><h3>東工大ピアノ・アンサンブルサークル</h3></a>"
puts "</header>"

puts "<p>"
puts "<strong><a href='/'>Top</a></strong> | "
puts "<strong><a href='/archive/'>Archive</a></strong> | "
puts "<strong><a href='/member/'>Member</a></strong> | "
puts "<strong><a href='/links/'>Links</a></strong>"
puts "</p>"


#----------------
# content
#----------------

# main
puts document.content

#----------------
# footer
#----------------

puts "<hr>"
puts "<footer><p>"
puts "<a href='https://docs.google.com/forms/d/1LWg2af8o1BzJTdzeYCLAcNGUVktlALSeZSZVzc-0Bxo/viewform?usp=send_form'>お問い合わせ(Google Forms)</a><br>"
puts "Last update<br>"
puts "#{File::Stat.new(filename).mtime} (JST) (this page) <br>"
puts "#{File::Stat.new('archive/all.json').mtime} (JST) (archive data)"
puts "</p></footer>"
