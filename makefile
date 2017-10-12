.PHONY: archive

SRCS	= $(shell find . -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)
YAMLS	= $(shell find . -name '*.yml')

all: clean archive htmls clean-archive

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

clean-archive: htmls
	find archive -name 'imgs' -delete
	find archive -name 'program' -delete
	find archive -name 'list' -delete
