/**
 * @param {string} s
 * @return {boolean}
 Input: s = "A man, a plan, a canal: Panama"
 Output: true
 Explanation: "amanaplanacanalpanama" is a palindrome.


 Input: s = "race a car"
 Output: false
 Explanation: "raceacar" is not a palindrome.

 Input: s = " "
 Output: true

 First approach:
 two pointers: left and right
 compare values from end and start until meet both pointers are equal
 if meet non-letter, increase one pointer
 if letters are same, increase both pointers
 if not same - return false
 return true after while;

 O(n / 2), O(1)
 */
var isPalindrome = function(s) {
  if (s.trim().length === 0) {
    return true;
  }

  let l = 0;
  let r = s.length - 1;

  const alphaNumericRegexp = /[a-z0-9]/
  while(l < r) {
    const lval = s[l].toLowerCase();
    if(!alphaNumericRegexp.test(lval)) {
      l++;

      continue;
    }

    const rval = s[r].toLowerCase();
    if(!alphaNumericRegexp.test(rval)) {
      r--;

      continue;
    }

    if (lval !== rval) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};
