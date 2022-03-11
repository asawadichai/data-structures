// graph structure {
// a : [b, c]
// b : [a, d]
// c : [a]
// d : [b]
// }

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edge = this.storage[node].pop();
  if (edge !== undefined) {
    this.removeEdge(node, edge);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  this.storage[fromNode].find(function(item) {
    if (item === toNode) {
      result = true;
    }
  });
  return result;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var remove = function (node, edge) {
    return node.filter( function(item) {
      return item !== edge;
    });
  };
  this.storage[fromNode] = remove(this.storage[fromNode], toNode);
  this.storage[toNode] = remove(this.storage[toNode], fromNode);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(1)
removeNode: O(n)
hasedge: O(n)
addEdge: O(1)
removeEdge: O(n)
forEachNode: O(n)
 */


