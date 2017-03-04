// to use:
// `npm i --save-dev electron-connect`
// add `client.create(browser_window_object)` to main.js
// `node dev-server.js`

'use strict';
const fs = require('fs')

var electron = require('electron-connect').server.create();

let reloader = function(e, filename) {
  console.log(`[${(new Date).toISOString()}] [reload]`);
  electron.reload()
}

fs.watch('dist', reloader);
electron.start();
