// [0, 1, 2, 3, 4, 5, 6, 7, 8]   _storage (main array)
// []   index 0 of _storage
// [], []   inside of index 0 holds [[key], [value]]
// [ [[key,value], [key, value]], [[key],[value]], [[key],[value]], [[key],[value]] ]

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create key/value arrays if it doesn't already exist
  var keyValue = [k, v];
  this._storage.set(index, keyValue);
  //console.log(this._storage.get(index));

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index).pop();

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var count = 0;

  var keyValuePairArray = this._storage.get(index);
  var cb = function(value, count, collection) {
    console.log('3 variables', value, count, collection);
    console.log('callback ', collection);
    if (collection.at(0) === value) {
      delete collection;

    }
  };
  this._storage.each(function () {
    cb(k, count, keyValuePairArray);
    count++;
  });
  //console.log(cb(keyValuePairArray[0]));




  //console.log(index);
  // var keyValuePairArray = this._storage.get(index);
  // console.log(keyValuePairArray);
  // keyValuePairArray.each(function (ele) {
  //   console.log('element', ele);
  // });

  // var findKey = function ()

  // this._storage.get(index).each();

  /*
    keyValuePairArray : [[key,value],[key,value],[key,value]]
    keyValuePairArray.each( function(elem) {
      if (elem.at(0) === k) {
        keyValuePairArray.splice(i, 1)
      }
    });
  */

  // limitedArray.each = function(callback) {
  //   for (var i = 0; i < storage.length; i++) {
  //     callback(storage[i], i, storage);
  //   }
  // };

  /*
  user key: apple
  hashed key: 2
  check storage[2] = [[key,value],[key,value],[key,value]]
  each method loop through storage array
  check key if matches input provided key
  remove index

  2 : [[apple, red], [apple, blue]];

  */
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


