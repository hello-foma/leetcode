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
 * @return {number}
 1
 / \
 2   3
 / \
 4   5
 \
 6
 Recursive go through each node
 Find max height of left and right
 node diameter is sum of higest left and right
 update highestDiameter, return maxChild


 O(n), O(n)
 */
var diameterOfBinaryTree = function(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return 0;
  }

  let maxDiagonal = 0;

  const recFn = (node) => {
    if (node.left === null && node.right === null) {
      return 0;
    }

    const left = node.left === null ? 0 : recFn(node.left) + 1;
    const right = node.right === null ? 0 : recFn(node.right) + 1;

    const diag = left + right;

    if (diag > maxDiagonal) {
      maxDiagonal = diag;
    }

    return Math.max(left, right);
  }

  recFn(root);

  return maxDiagonal;
};
