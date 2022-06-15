/**
 * @param {string} s
 * @return {number}

 Input: s = "abcabcbb"
 Output: 3

 Naive approach
 1. For each position we can have longest substring
 2. We need to return max length around local longest
 3. For each position we have local hash
 4. Iterate to substring after current position, check on hash, save at hash
 5. Update localMax
 6. Update globalMax

 O(n^2), O(1)


 Optimized approach
 1. Go for each elem
 2. Check hash
 3. If already at hash, remove from it, mark last valid position equal removed - 1
 4. Check longest
 5. save at hash
 6. At the end, calculate longest
 7. return longest

 O(n), O(1)
 */
var lengthOfLongestSubstring = function(s) {
  // Naive approach
  /*
  if (s.length < 2) {
      return s.length;
  }

  let longest = 0;

  for (let i = 0; i< s.length; i++) {
      const hash = {};
      let currentLength = 0;
      for (let j = i; j < s.length; j++) {
          const letter = s[j];
          if (hash[letter]) {
              break;
          } else {
              hash[letter] = true;
              currentLength++;
          }
          if (currentLength > longest) {
                  longest = currentLength;
          }
      }
  }

  return longest;
  */

  // Optimized approach
  if (s.length < 2) {
    return s.length;
  }

  let lastValidIndex = 0;
  let longest = 1;
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const isAlreadyMet = hash[letter] >= lastValidIndex;
    const isLast = i === s.length - 1;

    if (isAlreadyMet || isLast) {
      // Include current letter to sum, if already met, don't include
      const currentLength = i - lastValidIndex + (isAlreadyMet ? 0 : 1);

      if (currentLength > longest) {
        longest = currentLength;
      }


      lastValidIndex = hash[letter] + 1;
    }

    hash[letter] = i;
  }

  return longest;
};
