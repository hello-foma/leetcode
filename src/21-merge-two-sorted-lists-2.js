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

 We need to compbine two lists

 1. We have two pointers that points on last checked elem of each list
 2. Compare two elems at pointers
 3. Less value put at new list
 4. Increase pointer at less value
 5. Do until one of the pointers reaches end

 O(n), O(n) (as result)
 */
var mergeTwoLists = function(list1, list2) {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let merged = null;
  let tail = null;

  let a = list1;
  let b = list2;

  const saveToMerged = (node) => {
    if (merged === null) {
      merged = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }

  while (a || b) {
    if (!a) {
      saveToMerged(b);
      break;
    } else if (!b) {
      saveToMerged(a);
      break;
    }

    if (a.val < b.val) {
      saveToMerged(a);
      a = a.next;
    } else {
      saveToMerged(b);
      b = b.next;
    }
  }

  return merged;
};
