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

 We need to create copy of connected undirected graph

 1. We have list of connections
 2. We need to create new nodes and restore connections
 3. We can create hash of nodes, to keep new created (and visited) nodes
 4. When we met new node, create it and save to hash
 5. We need to connect this node with connections
 6. Get connection from hash, if exist
 7. If not - create new node recursively

 O(n) n = connections, O(n)
 */
var cloneGraph = function(node) {
  if (node === null) {
    return node;
  }

  const nodes = {};

  const getNodeCopy = (node) => {
    if (nodes[node.val]) {
      return nodes[node.val];
    }

    const copy = new Node(node.val);
    nodes[node.val] = copy;

    copy.neighbors = node.neighbors.map((node) => getNodeCopy(node));

    return copy;

  }

  return getNodeCopy(node);
};
