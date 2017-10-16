.PHONY: archive

SRCS	= $(shell find . -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)

all: archive htmls

archive:
	./archive.sh

htmls: $(OBJS)

%.html: %.adoc
	@asciidoc -b html5 -s $<
	@./template.sh $< $@ > $@.tmp
	@mv $@.tmp $@
	@echo convert $<

clean:
	find . -name '*.html' -delete
