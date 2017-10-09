.PHONY: htmls

SRCS	= $(shell find -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)

all: htmls

htmls: $(OBJS)

%.html: %.adoc template
	@asciidoc -b html5 -s $<
	@./template $< $@ > $@.tmp
	@mv $@.tmp $@
	@echo convert $<
