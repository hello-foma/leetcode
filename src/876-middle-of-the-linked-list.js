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

 First approach
 Build array of nodes
 Get length of array
 Return middle elem
 O(n), O(n)

 [1,2,3,4,5]
 Second Approach
 Go for each node, save middle, index of middle
 If new index middle not equal prev - shift one right
 O(n), O(1)

 */
var middleNode = function(head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let middle = head;
  let node = head;
  let shiftCount = 1;

  while(node) {
    if (shiftCount === 2) {
      middle = middle.next;
      shiftCount = 0;
    }

    shiftCount++;
    node = node.next;
  }

  return middle;
};
