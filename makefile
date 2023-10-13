.PHONY:

SRCS	= $(shell find . -name '*.adoc')
OBJS	= $(SRCS:.adoc=.html)

all: htmls

htmls: $(OBJS)

%.html: %.adoc convert.rb
	ruby ./convert.rb $< > $(basename $<).html

clean:
	find . -name '*.html' -delete
