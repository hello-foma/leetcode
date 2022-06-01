/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}

 Rec func
 We need to compare two nodes values
 If we have child  - compare betwen them
 if not same - return false

 O(n), O(n)
 */
var isSameTree = function(p, q) {
  if (p === null || q === null) {
    return p === q;
  }

  if (p.val !== q.val) {
    return false;
  }

  if (!isSameTree(p.left, q.left)) {
    return false;
  }
  if (!isSameTree(p.right, q.right)) {
    return false;
  }

  return true;
};
