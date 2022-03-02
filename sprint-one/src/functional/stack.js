var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.count = 0;

  someInstance.push = function(value) {
    storage[storage.count] = value;
    storage.count++;
  };

  someInstance.pop = function() {
    storage.count--;
    if (storage.count < 0) {
      storage.count = 0;
    }
    var output = storage[storage.count];
    delete storage[storage.count];
    return output;
  };

  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};
