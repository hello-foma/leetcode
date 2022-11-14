/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 1. We can iterate and fill hash of visited points
 O(n), O(n)

 2. Create two walkers - slow and fast. Iterate, until met or both go to the end
 O(n^2), O(1)
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) {
    return false;
  }

  if (head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while(slow !== fast && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow !== null && fast !== null && fast.next !== null;
};
