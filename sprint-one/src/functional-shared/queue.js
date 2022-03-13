var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue () {
    var output = this.storage[0];
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    delete this.storage[this.count];
    return output;
  },
  size () {
    return this.count;
  }
};