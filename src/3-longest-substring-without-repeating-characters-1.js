/**
 * @param {string} s
 * @return {number}

 We need to find length of the highest substring

 1. We can iterate by letters
 2. For each substring, have hash {letter: position}
 3. If we met copy, calculate length so far, compare with totalMax
 4. Update substring, from new position
 5. until reach end

 O(n), O(n)

 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length;
  }

  const hash = {};
  let startPos = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (hash[letter] >= startPos) {
      startPos = hash[letter] + 1;
    }

    hash[letter] = i;
    const currLength = i- startPos + 1;
    maxLength = Math.max(maxLength, currLength);

  }

  return maxLength;
};
