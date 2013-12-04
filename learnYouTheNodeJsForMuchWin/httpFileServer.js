var http = require('http');
var fs = require('fs');

var filePath = process.argv[2];

var server = http.createServer(function(req, res) {
  fs.createReadStream(filePath).pipe(res);
});

server.listen(8000);
