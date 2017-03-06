PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

.PHONY : default serve-dev clean

default: build serve

run:
	make build
	make serve &
	watch make build

build: dist/main.css js index

serve:
	electron .

index: dist/index.html

dist/index.html: src/index.html
	cp src/index.html dist/index.html

dist/main.css : src/css/*
	node-sass src/css/main.scss -o dist

js: dist/js/ dist/main.js

dist/main.js : src/main.js
	cp src/main.js dist/main.js

# dist/main.js : src/js/main.js
# 	babel src/js/main.js --out-file dist/main.js --presets=babel-preset-env

dist/js/ : src/js/*
	babel src/js -d dist/js --presets=env,react --plugins=transform-class-properties --source-maps

rawjs:
	babel src/js -d dist/js --presets=env,react --plugins=transform-class-properties

clean:
	rm -rf dist/*
