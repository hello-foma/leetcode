/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 We need to check is s and t are build from same letters.
 Use each letter once and exact count of letters.

 0. If different length - return false
 1. We can create hash of letters {letter: counter}
 2. iterate by second word and check letter in hash
 3. If we have same - decrease counter at hash
 4. If not found - return false
 5. return true;

 O(n), O(n)
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hash = {};

  for(let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);

    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  for(let i = 0; i < t.length; i++) {
    const char = t.charCodeAt(i);

    if (hash[char]) {
      hash[char]--;
    } else {
      return false;
    }
  }

  return true;
};
