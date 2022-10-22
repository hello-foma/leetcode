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
 * @return {TreeNode}

 We need to inver binary tree.
 Switch left and right elems of tree.

 Input: root = [4,2,7,1,3,6,9]
 Output: [4,7,2,9,6,3,1]

 1. Visit every node (DFS)
 2. If met left or right replace them and execute same fn (recursion)
 3. Out of recursion - return null

 O(n), O(n)

 */
var invertTree = function(root) {
  if (root === null) {
    return null;
  }

  const cached = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(cached);

  return root;
};
