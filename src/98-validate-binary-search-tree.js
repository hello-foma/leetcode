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
 1. Each left value must be lesser than parent
 2. Each right value must be greater than parent
 3. Each value at left subtree must be less than parent
 4. Each value at right subtree must be greater than parent
 5. Tree are valid if subtrees are valid

 1. Check root node, then check subtrees
 2. For each subtree provide parent value
 3. For left subtree, check left less, than provided value,
 4. Check left-left subtree with new parent
 5. For right subtree, do same with higher check
 6. Do until reach leaf, leaf return true
 DFS on recursion or stack
 O(n), O(n)

 */
var isValidBST = function(root) {
  const recFn = (node, min, max) => {
    if (node === null) {
      return true;
    }

    const parent = node.val;

    if (parent <= min || parent >= max) {
      return false;
    }

    return recFn(node.left, min, parent) && recFn(node.right, parent, max);
  }

  return recFn(root, -Infinity, Infinity);
};
