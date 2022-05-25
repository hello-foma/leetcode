/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}

 Naive solution:
 create result head
 initHead
 create tail
 initTail
 two pointers for head of each lists
 until both pointers are null
 is one null - set tail as left one
 set second tail to null
 compare elements at both lists and place at result
 place lesser and update related tail
 return head
 O(n), O(n)


 */
var mergeTwoLists = function(list1, list2) {
  if (list1 === null || list2 === null) {
    return list1 || list2;
  }

  let root = null;
  let tail = null;

  let aTail = list1;
  let bTail = list2;

  while(aTail || bTail) {
    if (bTail === null) {
      tail.next = aTail;
      break;
    } else if (aTail === null) {
      tail.next = bTail;
      break;
    }
    if (aTail.val < bTail.val) {
      if (tail) {
        tail.next = aTail;
      }
      tail = aTail;
      aTail = aTail.next;
    } else {
      if (tail) {
        tail.next = bTail;
      }

      tail = bTail;
      bTail = bTail.next;
    }

    if (root === null) {
      root = tail;
    }
  }

  return root;
};
