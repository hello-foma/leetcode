/*
Need to calculate longest distance beetween nodes
Distance between nodes - is number of edges between them

    1
   / \
  2   3
 / \
4   5

4->2->1->3 === 3

1. init longest
2. start from root, calculate height of subtrees
3. height(node)
4. to calculate height of node, go deeper until reach null
5. return max between left and right as height
6. to calculate diameter, make sum of heights and add 2 as edges between parent
7. update longest if needed
8. return longest

O(n), O(1)
 */

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
 */
var diameterOfBinaryTree = function(root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === 0) {
    return 0;
  }

  let maxD = 0;

  const calculateHeight = (node) => {
    if (node === null) {
      return -1;
    }

    const leftHeight = calculateHeight(node.left) + 1;
    const rightHeight = calculateHeight(node.right) + 1;

    const d = leftHeight + rightHeight;

    if (d > maxD) {
      maxD = d;
    }

    return Math.max(leftHeight, rightHeight);
  }

  calculateHeight(root);

  return maxD;
};
