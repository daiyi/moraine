'use strict';
const fs = require('fs')

var electron = require('electron-connect').server.create();

let reloader = function(e, filename) {
  console.log(`[${(new Date).toISOString()}] [reload]`);
  electron.reload()
}

fs.watch('index.html', reloader);
electron.start();
