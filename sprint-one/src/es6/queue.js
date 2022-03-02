class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  enqueue (value) {
    this.storage[this.count] = value;
    this.count++;
  }
  dequeue () {
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
  }
  size () {
    return this.count;
  }
}
