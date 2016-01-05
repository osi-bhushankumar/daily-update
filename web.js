var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(gzippo.staticGzip(__dirname + '/src/', {
  maxAge: 1,
  clientMaxAge: 1
}));
app.use(gzippo.compress());
app.listen(process.env.PORT || 5000);

app.get('*', function (req, res) {
  return res.sendFile(__dirname + '/src/index.html');
});

console.log('Server has been started');