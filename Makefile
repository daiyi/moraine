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
js: dist/node_modules/ dist/main.js
css: dist/main.css

dist/index.html: src/index.html
	cp src/index.html dist/index.html

dist/main.css : src/css/*
	node-sass src/css/main.scss -o dist

dist/main.js : src/main.js
	cp src/main.js dist/main.js

# dist/main.js : src/js/main.js
# 	babel src/js/main.js --out-file dist/main.js --presets=babel-preset-env

dist/node_modules/ : src/js/*
	babel src/js -d dist/node_modules --presets=env,react --plugins=transform-class-properties --source-maps
	mv dist/node_modules/index.js dist

rawjs:
	babel src/js -d dist/node_modules --presets=env,react --plugins=transform-class-properties

clean:
	rm -rf dist/*

cleanjs:
	rm -rf dist/node_modules
	rm dist/*.js
