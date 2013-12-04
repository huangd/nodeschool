var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url);
  var inputTime;

  if (urlObj.pathname === '/api/parsetime') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    inputTime = urlObj.query.split('=')[1];
    res.end(JSON.stringify(dateStrToJson(inputTime)));
  } else if (urlObj.pathname === '/api/unixtime') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    inputTime = urlObj.query.split('=')[1];
    res.end(JSON.stringify(getUnixTime(inputTime)));
  } else {
    res.writeHead(404);
    res.end('Not valid');
  }
});

function dateStrToJson(dateStr) {
  var date = new Date(dateStr);
  return {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  };
}

function getUnixTime(dateStr) {
  var date = new Date(dateStr);
  return {
    "unixtime": date.getTime()
  };
}

server.listen(8000);
