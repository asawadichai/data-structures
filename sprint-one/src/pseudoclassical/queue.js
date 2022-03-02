var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function () {
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
};

Queue.prototype.size = function () {
  return this.count;
}