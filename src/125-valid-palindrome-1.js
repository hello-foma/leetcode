/**
 * @param {string} s
 * @return {boolean}

 1. We have two poiners: at the begining and at the end
 2. Compare left and right, until left is lower than right
 3. If it's not a symbol, increase (decrease) pointer
 4. Compare lower versions of the char
 5. If not same - return false
 6. If same - update pointers
 7. return true

 O(n), O(1)
 */
var isPalindrome = function(s) {
  if (s.length === 1) {
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  const regExp = new RegExp('[a-zA-Z0-9]+');
  const isChar = (str) => regExp.test(str);

  while(left < right) {
    if (!isChar(s[left])) {
      left++;
      continue;
    }

    if (!isChar(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
