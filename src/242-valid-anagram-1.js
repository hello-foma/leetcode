/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 Input: s = "anagram", t = "nagaram"
 Output: true

 Input: s = "rat", t = "car"
 Output: false

 First approach:
 create hash of first
 for each elem at second use hash to check is presented
 if not presented - return false
 if presented - update hash to false

 if all checks passed - return false

 O(n*2), O(n)

 Second approach:
 sort both strings
 compare them

 O(n*2 + log(n)), O(n * 2)
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};

  for(let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }

  for(let i = 0; i < t.length; i++) {
    if(!hash[t[i]]) {
      return false;
    }

    hash[t[i]]--;
  }

  return true;
};
