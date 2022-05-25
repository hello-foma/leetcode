/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hash = {};

  for(let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) {
      if (hash[t[i]] === 1) {
        delete hash[t[i]];
      } else {
        hash[t[i]]--;
      }
    } else {
      return false;
    }
  }

  return Object.keys(hash).length === 0;
};
