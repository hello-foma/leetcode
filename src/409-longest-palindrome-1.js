/*
Need to build and count longest palindrome from the given string

1. Palindrome can be constructed by similar letters at the sides and or unique letter in the middle
2. We can go for each letter and put it at hash
3. If hash already have a letter, delete it from hash, increase counter
4. If there are any values at hash, increase counter
5. return counter
* Can we improve solution by not using hash?
* Can we go for iterating only once?
O(n), O(1)

 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return 1;
  }

  const hash = {};
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (hash[letter]) {
      delete hash[letter];
      counter+=2;
    } else {
      hash[letter] = true;
    }
  }

  if (Object.keys(hash).length !== 0) {
    counter++;
  }

  return counter;
};
