/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}

 1. We can create hash from magazine {letter: count}
 2. Iterate by note chars, look for letter at hash
 3. If no letter, return false
 4. return true after iterate

 O(n), O(1)
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length === 0) {
    return false;
  }

  const hash = {};

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];

    if (hash[letter]) {
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];

    if (hash[letter]) {
      hash[letter]--;
    } else {
      return false;
    }
  }

  return true;
};
