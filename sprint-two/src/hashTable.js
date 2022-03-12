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
    this._storage.set(index, [keyValue]);
  } else {
    var exists = false;

    for (var i = 0; i < outerArray.length; i++) {
      var innerArray = outerArray[i];
      if (innerArray.at(0) === k) {
        exists = true;
        innerArray[1] = v;
      }
    }
    if (!exists) {
      outerArray.push(keyValue);
    }
    this._storage.set(index, outerArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var outerArray = this._storage.get(index);
  var result;

  for (var i = 0; i < outerArray.length; i++) {
    var innerArray = outerArray[i];

    if (innerArray[0] === k) {
      result = innerArray[1];
    }

  }

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var outterArray = this._storage.get(index);

  var cb = function(key, collection) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].at(0) === key) {
        collection.splice(i, 1);
      }
    }
  };

  this._storage.each(function () {
    cb(k, outterArray);
  });

  this._storage.set(index, outterArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert: O(1) on average, O(n) as worst case
    retrieve: O(1) on average, O(n) as worst case
    remove: O(1) on avaerage, O(n) as worst case
 */


