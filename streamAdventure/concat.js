var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(text) {
  var reversedStr = text.toString().split('').reverse().join('');
  console.log(reversedStr);
}));
