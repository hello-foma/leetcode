/*
Detect is binary tree are valid
1. We can check left side and right side
2. If both are valid - it's a valid tree
3. Use DSF to look at branches
4. Compare branch with max and min value
5. Use recursion for check
6. return true if in range or have no children
7. return result of root

O(n), O(1) (O(n) for recursive call stack, O(m) m as height for stack)
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const stack = [[root, -Infinity, Infinity]];

  while(stack.length) {
    const [node, min, max] = stack.pop();

    if (node === null) {
      continue;
    }

    if (node.val >= max || node.val <= min) {
      return false;
    }

    stack.push([node.left, min, node.val], [node.right, node.val, max]);
  }

  return true;
};

var isValidBSTRecursive = function(root) {
  const checkTree = (node, min, max) => {
    if(node === null) {
      return true;
    }

    if (node.val >= max || node.val <= min) {
      return false;
    }

    return checkTree(node.left, min, node.val) && checkTree(node.right, node.val, max);
  }

  return checkTree(root, -Infinity, Infinity);
};
