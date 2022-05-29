/**
 * @param {string} a
 * @param {string} b
 * @return {string}

 Approach 1
 By js parseNum() funct, toString
 O(1), O(n)

 Approach 2
 Take binary sum from last char
 take count of 1 shifts
 Take one from count, decrement, if applyable
 If both are 1 - make 0 and move one to the left (increment count)
 If one of them 1 - keep 1
 If booth of them 0 - keep 0
 if left 1 after each - place at the start

 O(n), O(1)
 */
var addBinary = function(a, b) {
  if (a.length === 0 || b.length === 0 || a === '0' || b === '0') {
    return a === '0' ? b : a;
  }

  let count = 0;

  const maxLength = Math.max(a.length, b.length);

  let i = 0;
  let res = '';

  while(count || i < maxLength) {
    const aVal = i < a.length ? +a[a.length - 1 - i] : 0;
    const bVal = i < b.length ? +b[b.length - 1 - i] : 0;
    let posValue;

    const positionSum = aVal + bVal;

    if (positionSum === 1) {
      posValue = '1';
    } else {
      posValue = '0';
    }

    if (count > 0) {
      if(posValue === '0') {
        posValue = '1';
        count--;
      } else {
        posValue = '0';
      }
    }

    if(positionSum === 2) {
      count++;
    }

    res = posValue + res;
    i++;

  }

  return res;
};
