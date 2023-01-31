/*
Need to reverse list

1 -> 2
2 -> 3

prevNode = [1, null]
prevNode = [2, 1]

1. Init prevNode as null
2. Iterate by list until met null
3. For each value, create new node with same value and next to prevNode
4. Update prevNode with current node
5. after iterating, return prevNode

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
var reverseList = function(head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let prev = null;
  let curr = head;

  while(curr) {
    const node = new ListNode(curr.val, prev);
    prev = node;
    curr = curr.next;
  }

  return prev;
};
