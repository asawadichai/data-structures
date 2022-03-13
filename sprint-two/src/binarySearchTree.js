var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // go left
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }

  // go right
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;

  if (value === this.value) {
    result = true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
  } else {
    if (this.right) {
      return this.right.contains(value);
    }
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(log)
  contains: O(log)
  depthFirstLog: O(n)
 */