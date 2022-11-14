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

 We need to construct flatten by levels traverse of tree

 1. We can start from the 0 lvl and push at queue all childs with lvl + 1 [node, lvl]
 2. Keep curr lvl of depth
 3. While we have queue, pop from start
 4. if lvl same - push at last elem at result
 5. if lvl updated - push at new elem, update lvl counter

 O(n), O(n)
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const res = [[]];
  let currLvl = 0;
  const queue = [];
  let i = 0;

  queue.push([root, currLvl]);

  while(i < queue.length) {
    const [node, lvl] = queue[i];

    if (node.left) {
      queue.push([node.left, lvl + 1]);
    }

    if (node.right) {
      queue.push([node.right, lvl + 1]);
    }

    if (lvl !== currLvl) {
      currLvl = lvl;
      res.push([]);
    }

    res[res.length - 1].push(node.val);
    i++;
  }

  return res;
};
