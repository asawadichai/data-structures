var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {
  push (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop () {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    var output = this.storage[this.count];
    delete this.storage[this.count];
    return output;
  },
  size () {
    return this.count;
  }
};


