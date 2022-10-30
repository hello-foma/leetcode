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

 We need to detect if tree are balanced;
 Balanced if branches' height is no moree than 1


 Recursive
 1. If left and right balanced - return true
 2. Exit of recursion - leaf nodes (null)
 3. Get height of current leaf
 4. Compare with sibling
 5. if such sibling, go deeper and increase depth lvl
 6. On leaf return depth

 O(n), O(n) (can be improved by stack)
 */
var isBalanced = function(root) {
  if (root === null) {
    return true;
  }

  const getHeight = (node, height) => {
    if (node === null) {
      return height - 1;
    }

    if (node.left === null && node.right === null) {
      return height;
    }

    const leftHeight = getHeight(node.left, height + 1);
    const rightHeight = getHeight(node.right, height + 1);

    if (leftHeight === -1 || rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight);
  }

  return getHeight(root, 0) !== -1;
};
