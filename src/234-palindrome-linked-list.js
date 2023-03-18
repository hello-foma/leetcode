/*
Check is given list a palindrome

1. It's a palindrome if there are symetric values from the center

1. We can find a center by iterationg through all list
2. Put all values at the array
3. Start from center and go prev and next value to compare

O(n), O(n)

1. We can calculate length of the list by running once
2. When come to the center, continue traverse and compare with prev values
3. To get prrev values, interate from start until get desire value

O(n^2), O(1)

1. We can calculate length of the linked list
2. By given length, we can find middle of the list
3. Reverse second half of the list
4. Compare two pointers from begining and from second half
5. If points not same - return false
6. Otherwise - return true
7. Reverse list back

O(n), O(1)

1. To calculate length we can have two runners
2. For slow runner - we got middle
3. From middle, reverse second half of the list
4. To reverse, we create new node with null next
5. Iterate until got null next
6. For each next node, create new node with next as last saved, current val
7. For last node, set next equal to first created (head)
8. Compare by iterating from begining of two halves
9. do reverse again before return result

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const reverseList = (node) => {
    if (node.next === null) {
      return node;
    }

    let head = node.next;
    let tail = node;

    node.next = null;

    while(head) {
      let temp = head.next;
      head.next = tail;
      tail = head;
      head = temp;
    }

    return tail;
  }

  const reversed = reverseList(slow.next);

  let a = head;
  let b = reversed;
  let isPalindrome = a.val === b.val;

  while(a && b && isPalindrome) {
    isPalindrome = a.val === b.val;
    a = a.next;
    b = b.next;
  }

  slow.next = reverseList(reversed);

  return isPalindrome;
};
