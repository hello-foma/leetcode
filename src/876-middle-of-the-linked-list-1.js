/**
 Need to find middle node of list

 To find middle, we must run until end
 We can have two pointers - one 2x faster , another slower
 When faster finishes traversing, slower will point to the middle

 [1,2,3,4,5]
 ^     *

 [1,2,3,4,5,6]
 ^     *
 O(n), O(1)

 */

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
 */
var middleNode = function(head) {
  if (head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head.next;

  while(fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }

  return slow;
};
