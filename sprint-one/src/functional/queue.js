var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.size = 0;

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
    storage.size++;
  };

  someInstance.dequeue = function() {
    var output = storage[0];
    for (var i = 0; i < storage.size; i++) {
      storage[i] = storage[i + 1];
    }
    storage.size--;
    if (storage.size < 0) {
      storage.size = 0;
    }
    delete storage[storage.size];
    return output;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
