/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}

 Naive approach:
 Find node one and two by binary search and save ancestors of node
 Compare ancestors one by one until we found diff
 last will be our result
 O(n) O(n)

 Optimized approach:
 Need to find both p and q at the same node
 when we need to separate - thats mean we at the point that have similar parent
 return that parent
 O(log(n)), O(1)

 */
var lowestCommonAncestor = function(root, p, q) {
  /*
  // Naive approach
  if (root === null) {
      return null;
  }

  if (p.val === q.val) {
      return p;
  }

  const findNode = (node, target, ancestors) => {
      ancestors.push(node);
      if (node === target) {
          return ancestors;
      }

      if ((node.val > target.val) && node.left) {
          findNode(node.left, target, ancestors);
      } else if (node.right) {
          findNode(node.right, target, ancestors);
      }

      return ancestors;
  }

  const ancestorsP = findNode(root, p, []);
  const ancestorsQ = findNode(root, q, []);

  if (ancestorsP.length === 1) {
      return ancestorsP[0];
  }

  const shortest = Math.min(ancestorsP.length, ancestorsQ.length);

  for(let i = 0; i < shortest; i++) {
      if(ancestorsP[i].val !== ancestorsQ[i].val) {
          return ancestorsP[i - 1];
      }
  }

  return ancestorsP[shortest - 1];
  */

  // Optimized approach

  if (root === null) {
    return null;
  }

  if (p.val === q.val) {
    return p;
  }

  if ((p.val < root.val) && (q.val < root.val) && root.left) {
    return lowestCommonAncestor(root.left, p, q);
  } else if ((p.val > root.val) && (q.val > root.val) && root.right) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
