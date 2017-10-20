.PHONY:

SRCS	= $(shell find . -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)

all: htmls

htmls: $(OBJS)

%.html: %.adoc template.sh
	@asciidoc -b html5 -s $<
	@./template.sh $< $@ > $@.tmp
	@mv $@.tmp $@
	@echo convert $<

clean:
	find . -name '*.html' -delete
