/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}


 Need to create new nodes
 Each node contains their connections

 We can take first node and go for their connections
 If not already visited
 Mark current as visited (save to hash)
 For each connection, take\save to hash,
 Do until met every connection

 return new root
 O(n), O(n)

 */
var cloneGraph = function(node) {
  if (node === null) {
    return null;
  }

  const created = {};

  const copyNode = (node) => {
    if (created[node.val]) {
      return created[node.val];
    }

    const newNode = new Node();
    created[node.val] = newNode;

    newNode.val = node.val;
    newNode.neighbors = node.neighbors.map((neighbor) => copyNode(neighbor));

    return newNode;
  }

  return copyNode(node);
};
