/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}

 First approach
 We need to go deep until find leaf
 leaf return 0, then at each level add one
 if some children are unbalanced tree - return -1
 if left height and right height delta more then 1 return -1
 if it's -1 at root lvl then return false

 O(n), O(1)
 */
var isBalanced = function(root) {
  if (root === null) {
    return null;
  }

  const nodeDepth = (node) => {
    if (node === null) {
      return 0;
    }

    if (node.left === null && node.right === null) {
      return 1;
    }

    const left = nodeDepth(node.left);
    if (left === -1) {
      return -1;
    }

    const right = nodeDepth(node.right);
    if (right === -1) {
      return -1;
    }

    if (Math.abs(left - right) > 1) {
      return -1;
    }

    return Math.max(left, right) + 1;
  }

  return nodeDepth(root) !== -1;
};
