var request = require('request');

var postRequest = request.post('http://localhost:8000/');

process.stdin.pipe(postRequest).pipe(process.stdout);
