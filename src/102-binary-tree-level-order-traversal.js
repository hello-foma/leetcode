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
 * @return {number[][]}

 1. Place current node (root) at level arr
 2. check level, until end
 3. For each node, put childs at next levels
 4. If end, place level at result, make nextLevel to current, reset nextLevel
 5. Do until cur empty

 O(n), O(n)
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const res = [];
  let curr = [root];
  let next = [];

  while(curr.length !== 0) {
    const elemLength = curr.length;
    for (let i = 0; i < elemLength; i++) {
      const node = curr[i];

      if (node && node.left) {
        next.push(node.left);
      }

      if (node && node.right) {
        next.push(node.right);
      }

      const isLast = i === (curr.length - 1);
      if (isLast) {
        res.push(curr.map(n => n.val));

        curr = next;
        next = [];
      }
    }
  }

  return res;
};
