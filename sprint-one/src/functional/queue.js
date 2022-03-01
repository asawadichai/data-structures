var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.enqueue = function(value) {
    if (someInstance.size() === 0) {
      storage[0] = value;
    } else {
      var end = someInstance.size();
      storage[end] = value;
    }
  };

  someInstance.dequeue = function() {
    var last = someInstance.size() - 1;
    var output = storage[0];
    delete storage[0];
    for (var i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[last];
    return output;
  };

  someInstance.size = function() {
    if (Object.keys(storage).length > 0) {
      var keys = Object.keys(storage);
      keys = keys.map(Number);
      var last = Math.max(...keys);
      return ++last;
    } else {
      return 0;
    }
  };

  return someInstance;
};
