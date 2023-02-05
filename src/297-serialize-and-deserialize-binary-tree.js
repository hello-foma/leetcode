/**
 We need to serialize and desirialize BT to string
 To serialize and deseriliaze we can use DFS and BFS

 1
 /  \
 2    3
 / \
 4   5


 Using DFS with rec:
 Serialize:
 1. init result
 2. call dfs
 3. put val at res
 4. cal dfs on left and right
 5. return result

 O(n), O(n)

 1
 / \
 2   3
 4 5

 Deserialize:
 1. Init pointer
 2. Init values
 3. call dfs
 4. get val by pointer
 5. increment pointer
 6. call dfs on left and right
 7. return node

 O(n), O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
  if (root === null) {
    return '';
  }

  let res = '';

  const dfs = (node) => {
    if (node === null) {
      res = res + ',null';
      return;
    } else {
      res = res + ',' + node.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return res.substring(1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '') {
    return null;
  }

  const values = data.split(',');
  let i = 0;

  const dfs = () => {
    const val = values[i++];

    if (val === 'null') {
      return null;
    }

    const node = new TreeNode(+val);
    node.left = dfs();
    node.right = dfs();

    return node;
  }

  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/*
Using DFS with stack:
Serilize:
1. Create stack
2. Create result string
2. Put root at stack
3. Do until stack
4. Pop from stack
5. If node, put right, left at stack. If stack empty and no childs, don't put
6. Put value at string
7. return string
O(n), O(n)

[1,2,null,null,3,4,null,null,5]
'1,2,null,null,3,4,null,null,5'
  1
 / \
2   3
   4 5

Deserialize:
1. Init stack
2. Split string by delimeter
3. Iterate by elems at string
4. Create node. Set left and right as undefined.
5. Set as left or right, if have elem at stack
6. If its node, push at stack
7. If node is setted full, pop from stack
8. Go to 3
9. Return stack first elem

O(n), O(n)
 */
var serialize2 = function(root) {
  if (root === null) {
    return '';
  }

  const stack = [root];
  let res = '';

  while(stack.length !== 0) {
    const node = stack.pop();

    if (node === null) {
      res = res + ',null';
    } else {
      res = res + ',' + node.val;
      stack.push(node.right);
      stack.push(node.left);
    }
  }

  return res.substring(1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize2 = function(data) {
  if (data === '') {
    return null;
  }

  const stack = [];
  const serialized = data.split(',');

  for (let i = 0; i < serialized.length; i++) {
    const serializedStr = serialized[i];
    const isSet = (val) => typeof val !== 'undefined';
    const setAsChild = (val) => {
      const node = stack[stack.length - 1];

      if (!isSet(node)) {
        return;
      }

      if (!isSet(node.left)) {
        node.left = val;
      } else if (!isSet(node.right)) {
        node.right = val;
      }
    }

    if (serializedStr === 'null') {
      setAsChild(null);
    } else {
      const node = { val: +serializedStr, left: void 0, right: void 0};

      setAsChild(node);
      stack.push(node);
    }

    let isNeedToPop = false;
    do {
      const lastNode = stack[stack.length - 1];
      const isLastNodeFilled = isSet(lastNode) && isSet(lastNode.left) && isSet(lastNode.right);
      const isLast = stack.length === 1;
      isNeedToPop = isLastNodeFilled && !isLast;
      if (isNeedToPop) {
        stack.pop();
      }
    } while(isNeedToPop)
  }

  return stack[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
