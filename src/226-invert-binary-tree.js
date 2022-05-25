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

 Traverse tree
 recFunc(tree)
 for each child - recFunc()
 then change left and right
 if no child - return
 return root;

 O(n), O(n)

 can be improved at space complexity O(1) if using stack BFS

 */
var invertTree = function(root) {
  if (root === null) {
    return null;
  }

  if(!root.left && !root.right) {
    return root;
  }

  const invertedLeft = invertTree(root.left);
  const invertedRight = invertTree(root.right);

  root.left = invertedRight;
  root.right = invertedLeft;

  return root;
};
