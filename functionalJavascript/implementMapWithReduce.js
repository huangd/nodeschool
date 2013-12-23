module.exports = function arrayMap(arr, fun) {
  return arr.reduce(function(previous, current) {
    return previous.concat(fun(current));
  }, []);
};
