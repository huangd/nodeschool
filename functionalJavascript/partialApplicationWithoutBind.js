var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    console.log(namespace + ' ' + slice.apply(arguments).join(' '));
  };
}

module.exports = logger;
