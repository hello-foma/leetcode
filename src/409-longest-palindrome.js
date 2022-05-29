/**
 * @param {string} s
 * @return {number}

 palindrome needs to have similar letters from the start to middle and to the end    from middle reversed;
 Middle can be 1 ore 0 characters;

 abccccdd

 count double letters (case-sensetive) and add one, is exist
 hash {letter: count}
 totalCount
 for each letter
 look at hash, if found, delete from hash, increment totalCount
 if not, save to hash
 return totalCount * 2, if hash still have some, add one

 O(n), O(n)

 Improved memory
 for each letter, look for same match, remove from string, is found any and increment total count by 2, return totalCount + 1 if string left

 O(n^2), O(1)
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s.length;
  }

  const set = new Set();
  let totalCount = 0;

  for(let i = 0; i<s.length; i++) {
    const letter = s[i];
    if (set.has(letter)) {
      set.delete(letter);

      totalCount += 2;
    } else {
      set.add(letter);
    }
  }

  return totalCount + (set.size > 0 ? 1 : 0);
};
