# Read from environment variable, default 3.8
JEKYLL_VERSION ?= 3.8

.PHONY: build
build:
	@echo "Building Static files"
	mkdir -p $$PWD/docs/
	chmod -R 777 $$PWD/docs/
	docker run --rm --volume="$$PWD:/srv/jekyll" jekyll/builder:$(JEKYLL_VERSION) jekyll build
