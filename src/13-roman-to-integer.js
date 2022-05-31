/**
 * @param {string} s
 * @return {number}
 Total: var to keep sum
 Iterate by string,
 Add val to total,
 If we met I,X,C, check next, if its combination.
 if no, sum as is. If yes - sum by rule, increase index by two

 O(n), O(1)

 Note:
 We know that if some Letter are lesser, then next, that mean we can reduce it from result
 Code can be improved with that logic.
 Still O(n), O(1) complexity

 */
var romanToInt = function(s) {
  if (s.length === 0) {
    return 0;
  }

  let total = 0;

  for(let i = 0; i < s.length; i++) {
    const num = s[i];

    switch(num) {
      case 'I':
        if(s[i+1]) {
          if (s[i+1] === 'V') {
            total += 4;
            i++;
            break;
          }
          if (s[i+1] === 'X') {
            total += 9;
            i++;
            break;
          }
        }
        total += 1;
        break;
      case 'X':
        if(s[i+1]) {
          if (s[i+1] === 'L') {
            total += 40;
            i++;
            break;
          }
          if (s[i+1] === 'C') {
            total += 90;
            i++;
            break;
          }
        }
        total += 10;
        break;
      case 'C':
        if(s[i+1]) {
          if (s[i+1] === 'D') {
            total += 400;
            i++;
            break;
          }
          if (s[i+1] === 'M') {
            total += 900;
            i++;
            break;
          }
        }
        total += 100;
        break;
      case 'V':
        total += 5;
        break;
      case 'L':
        total += 50;
        break;
      case 'D':
        total += 500;
        break;
      case 'M':
        total += 1000;
        break;
    }

  }

  return total;
};
