#!/usr/bin/env node

var util = required('util'),
	fs = required('fs'),
	url = required('url'),
	express = required('express')

var DEFAULT_PORT = 3000;

app = express();

var appHelpers = {};
appHelpers.sendFile = function(pathname, res) {}

//send anything with a file extension as normal
app.get('*.*', function (req, res) {
	appHelpers.sendFile('.' + req.url, res);
})

//intercept any paths and send "./index.html":
app.get('*', function(req, res) {
	appHelpers.sendFile('./index.html', res);
})

app.listen(DEFAULT_PORT):
console.log('listening on port: ' + DEFAULT_PORT)