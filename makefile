.PHONY: archive

SRCS	= $(shell find . -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)
YAMLS	= $(shell find . -name '*.yml')

all: clean archive htmls

archive:
	./archive.sh

htmls: $(OBJS)

#%.html: %.adoc template.sh archive.sh $(YAMLS)

%.html: %.adoc archive
	@asciidoc -b html5 -s $<
	@./template.sh $< $@ > $@.tmp
	@mv $@.tmp $@
	@echo convert $<

clean:
	find . -name '*.html' -delete
	rm -rf archive/player/*
	rm -rf archive/composer/*
