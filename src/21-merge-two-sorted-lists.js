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
 */
var mergeTwoLists = function(list1, list2) {
  if (list1  === null && list2 === null) {
    return null;
  }

  if (list1 === null && list2 !== null) {
    return list2;
  }

  if (list2 === null && list1 !== null) {
    return list1;
  }

  let lastA = list1;
  let lastB = list2;
  let head = null;
  let lastNode = null;

  while(lastA || lastB) {
    const isOneNodeAreNull = lastA === null || lastB === null;

    if (isOneNodeAreNull) {
      const lesserNode = lastA || lastB;

      if (lastNode) {
        lastNode.next = lesserNode;
      }

      return head;
    }

    const isALesser = lastA.val <= lastB.val;
    const lesserNode = isALesser ? lastA : lastB;

    if (isALesser) {
      lastA = lastA && lastA.next;
    } else {
      lastB = lastB && lastB.next;
    }

    const newNode =  {
      val: lesserNode.val,
      next: null
    }

    if (lastNode) {
      lastNode.next = newNode;
    }

    lastNode = newNode

    if (head) {
      if (head.next === null) {
        head.next = lastNode;
      }
    } else {
      head = lastNode;
    }
  }

  return head;
};

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
 */
var mergeTwoListsByRecursion = function(list1, list2) {
  const getLesser = (a, b) => {
    if (a === null && b === null) {
      return null;
    }

    if (a === null || b === null) {
      return a || b;
    }

    const isALesser = a.val <= b.val;
    const lesserValue = isALesser ? a.val : b.val;

    return {
      val: lesserValue,
      next: getLesser(isALesser ? a.next : a, isALesser ? b : b.next)
    }
  }

  return getLesser(list1, list2);
}
