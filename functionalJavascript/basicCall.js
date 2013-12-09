function duckCount() {
  return Array.prototype.filter.call(arguments, function(argument) {
    return Object.prototype.hasOwnProperty.call(argument, 'quack');
  }).length;
}

module.exports = duckCount;
