/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

 We need to reverse nodes
 We can swap head and next for each node

 We can use recursive or iterative
 As iterative - we put each value at stack, then release stack with changing next
 As recursive
 If we dont have next (tail) - then we need to return node with new next as passed head
 Otherwise we need to run next recFn, current node to next.
 Update result of rec, set next as current.
 Set current next as null;
 return updated node;

 Complexity of both
 O(n), O(n)

 Can be improved:
 iterative - space complexity O(1)
 recursive - only one param (no need to create second func)
 */
var reverseList = function(head) {
  // Iterative
  /*
  if (head === null) {
      return null;
  }

  if (head.next === null) {
      return head;
  }

  const stack = [];
  let node = head;


  while(node) {
      stack.push(node);

      node = node.next;
  }

  let newHead = stack.pop();
  let tail = stack.pop();
  tail.next = null;
  newHead.next = tail;

  while(stack.length !== 0) {
      const node = stack.pop();
      node.next = null;
      tail.next = node;
      tail = node;
  }

  return newHead;
  */

  // recursively
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }


  const recFn = (parent, node) => {
    const child = node.next;
    node.next = parent;

    if (!child) {
      return node;
    }


    return recFn(node, child);
  }

  return recFn(null, head);
};
