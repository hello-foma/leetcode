/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }

  const hash = new WeakSet();
  let currentNode = head.next;

  while(currentNode) {
    if (hash.has(currentNode)) {
      return true;
    }

    hash.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
};

var hasCycleLowMemory = function(head) {
  if (!head || !head.next || !head.next.next) {
    return false;
  }

  let slow = head;
  let fast = head.next.next;

  while(fast && fast.next && fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return fast === slow;
};
