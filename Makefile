PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

DIST = dist
SRC = src

.PHONY : default serve-dev clean

default: build serve

build: $(DIST)/index.html $(DIST)/main.css $(DIST)/main.js $(DIST)/app.js

serve:
	electron .

# see dev-server.js for instructions
serve-electron-connect:
	node dev-server.js

$(DIST)/main.css : $(SRC)/css/*.scss
	node-sass $(SRC)/css/main.scss -o $(DIST)

$(DIST)/main.js : $(SRC)/js/main.js
	babel $(SRC)/js -d $(DIST) --presets=babel-preset-env

$(DIST)/app.js : $(SRC)/js/app.js
	babel $(SRC)/js -d $(DIST) --presets=babel-preset-env

$(DIST)/index.html : $(SRC)/index.html
	cp $(SRC)/index.html $(DIST)/index.html

clean:
	rm -rf dist/*
