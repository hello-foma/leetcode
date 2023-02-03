/*
Need to find lowest common ancestor of two points
This subtree must contains both nodes
Subtree node root also can be descendant of itself

     3
  /    \
 5      1
/  \    /  \
6    2  0    8
  / \
 7   4

We can do DFS to find both nodes.
As soon we found both nodes, return node

1. Recursive
2. Start with root
5. If val is equal one of the nodes, look at child
5. If node is only one - return true
6. If find both child (or val) equal to searches, return node


O(n), O(1) <-- O(n) for call stack
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
    return false;
  }

  const lookForP = root === p ? null : p;
  const lookForQ = root === q ? null : q;

  const isRootValMatched = root === p || root === q;
  const isOnlyOne = p === null || q === null;

  if (isRootValMatched && isOnlyOne) {
    return true;
  }

  const left = lowestCommonAncestor(root.left, lookForP, lookForQ);

  if (typeof left !== 'boolean') {
    return left;
  }

  const right = lowestCommonAncestor(root.right, lookForP, lookForQ);

  if (typeof right !== 'boolean') {
    return right;
  }

  const isChildsMatched = left && right;
  const isRootWithChild = isRootValMatched && (left || right);

  if (isChildsMatched || isRootWithChild) {
    return root;
  }

  if (isRootValMatched || left || right) {
    return true;
  }

  return false;
};
