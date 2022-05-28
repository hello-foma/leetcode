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

 First approach
 Traverse each node
 Check if visited
 Save to visited hash
 If we met node again, return true
 return false

 O(n), O(n)

 Constant memory
 Check every node
 For each node, find tail
 If we meet that node, return false
 O(n^2), O(1)

 Constant memory with 2 runners
 Check every node until reach tail
 Create second, faster runner, that shifts next 2 more
 if runners met, return false
 if reaches tail, return true
 O(n^2) (O(n/2)), O(1)

 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slower = head;
  let faster = head.next;

  let i = 0;
  while(faster !== null && faster.next !== null) {
    if (slower === faster) {
      return true;
    }

    slower = slower.next;
    faster = faster.next.next;
  }

  return false;
};
