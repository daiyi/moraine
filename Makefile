PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

default: index.html main.js
	electron . &

reload:
	reload

clean:
	echo "todo"
