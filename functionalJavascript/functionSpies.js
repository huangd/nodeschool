function Spy(target, method) {
  if (!(this instanceof Spy)) {
    return new Spy(target, method);
  }
  this.count = 0;
  targetMethod = target[method];
  target[method] = function() {
    this.count += 1;
    return targetMethod.apply(target, arguments);
  }.bind(this);
}

module.exports = Spy;
