.PHONY: htmls

SRCS	= $(shell find . -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)
YAMLS	= $(shell find . -name '*.yml')

all: htmls

htmls: $(OBJS)

%.html: %.adoc template.sh archive.sh $(YAMLS)
	@asciidoc -b html5 -s $<
	@./template.sh $< $@ > $@.tmp
	@mv $@.tmp $@
	@echo convert $<

archive/composer/index.html: archive/composer/composer
