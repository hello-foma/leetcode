/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 Create a hash from magazine {letter: count}
 Check every letter from note at hash
 if cant find at hash - return false
 otherwise, decrease counter
 at the end return true

 O(n+m), O(m)

 Alternative approach
 Sort both strings
 go for each elem
 O(log(n) + log(m) + n), O(n+m)

 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length === 0) {
    return true;
  }

  if (magazine.length < ransomNote.length) {
    return false;
  }

  let hash = {};

  for(let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];

    if (hash[letter]) {
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
  }

  for(let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];

    if (hash[letter]) {
      hash[letter]--;
    } else {
      return false;
    }
  }

  return true;
};
