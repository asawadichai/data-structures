var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.push = function(value) {
    if (someInstance.size() === 0) {
      storage[0] = value;
    } else {
      var end = someInstance.size();
      storage[end] = value;
    }
  };

  someInstance.pop = function() {
    var last = someInstance.size();
    --last;
    var output = storage[last];
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
