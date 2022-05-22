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

  const stack = [];
  let tail = head;

  while(tail) {
    stack.push(tail);
    tail = tail.next;
  }

  let newHead = null;
  while(stack.length !== 0) {
    const newTail = stack.pop();
    if (stack.length === 0) {
      newTail.next = null;
    }
    if (newHead === null) {
      newHead = newTail;
    } else {
      tail.next = newTail;
    }
    tail = newTail;
  }

  return newHead;
};

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
var reverseListRecursive = function(head) {
  if (head === null) {
    return null;
  }

  const rev = (prev, curr) => {
    if (curr.next === null) {
      curr.next = prev;

      return curr;
    }

    const next = curr.next;
    curr.next = prev;

    return rev(curr, next);
  }

  return rev(null, head);
};
