var net = require('net');

var server = net.createServer(function(socket) {
  var date = new Date();
  var month = date.getMonth() + 1;
  var currentDate = date.getDate();
  if (currentDate < 10) {
    currentDate = '0' + currentDate;
  }
  socket.end(date.getFullYear() + '-' + month + '-' + currentDate + ' ' + date.getHours() + ':' + date.getMinutes() + '\n');
});

server.listen(8000);
