// [0, 1, 2, 3, 4, 5, 6, 7, 8]   _storage (main array)
// []   index 0 of _storage
// [], []   inside of index 0 holds [[key], [value]]
// [ [[key,value], [key, value]], [[key],[value]], [[key],[value]], [[key],[value]] ]
// [  [k,v]        ,           ]

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create key/value arrays if it doesn't already exist
  var keyValue = [k, v];
  var outerArray = this._storage.get(index);
  if (outerArray === undefined) {
    this._storage.set(index, [[keyValue]]);
  } else {
    var exists = false;

    for (var i = 0; i < outerArray.length; i++) {
      outerArray[i].forEach(function(innerArray) {
        if (innerArray.at(0) === k) {
          exists = true;
          innerArray[1] = v;
        }
      });
    }
    if (!exists) {
      outerArray.push([keyValue]);
    }
    this._storage.set(index, outerArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValueIndex = this._storage.get(index);
  var result;

  for (var i = 0; i < keyValueIndex.length; i++) {
    keyValueIndex[i].forEach(function(elem) {
      if (elem.at(0) === k) {
        result = elem.at(1);
      }
    });
  }

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var count = 0;

  var keyValuePairArray = this._storage.get(index);

  var cb = function(value, count, collection) {

    if (collection.at(0) === value) {
      // will need to handle nested array
      collection.splice(count, 2);
    }
  };

  this._storage.each(function () {
    cb(k, count, keyValuePairArray);
    count++;
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


