var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var port = process.env.PORT || 5000;

app = express();
app.use('/static', serveStatic(__dirname + "/static"));
app.use(serveStatic(__dirname + "/dist"));

app.listen(port);

console.log('server started http://localhost:'+ port);
