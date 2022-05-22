/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const hash = {};

  for(let i = 0; i < magazine.length; i++) {
    if (hash[magazine[i]]) {
      hash[magazine[i]]++;
    } else {
      hash[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (hash[ransomNote[i]]) {
      hash[ransomNote[i]]--;
    } else {
      return false;
    }
  }

  return true;
};


canConstruct("aab", "baa");
