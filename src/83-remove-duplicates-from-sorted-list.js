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
var deleteDuplicates = function(head) {
  if (head === null ) {
    return null;
  }

  let tail = head;
  let node = head.next;

  while(node) {
    if (node.val !== tail.val) {
      tail.next = node;
      tail = node;
    } else {
      tail.next = null;
    }

    node = node.next;
  }

  return head;
};
