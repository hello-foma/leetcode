/**
 Need to find minimum substring that contains all chars from t at s
 We can use sliding window
 0. create lookup hash, found hash, totalFound, startPos, shortest
 1. Iterate by s
 2. If we meet t, increase found hash. Compare with lookHash
 3. If count at found hash equal lookHash, increase totalFound
 4. If totalFound equal to t.length, compare and update shortest, reduce startPos
 5. Do until reach end of s

 return shortest

 return shortest

 O(n+m)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) {
    return '';
  }

  if (s.length === 1) {
    return s === t ? s : '';
  }

  const lookupHash = {};
  let lookupLength = 0;

  for(let i = 0; i < t.length; i++) {
    const char = t[i];
    if (typeof lookupHash[char] !== 'number') {
      lookupHash[char] = 1;
      lookupLength++;
    } else {
      lookupHash[char]++;
    }
  }

  let shortest = null;
  const found = {};
  let foundLength = 0;
  let l = 0;
  let r = 0;
  let isShrink = false;

  while((l <= r) && (l < s.length)) {
    if (isShrink) {
      const char = s[l];

      if (found[char]) {
        const isCounted = found[char] >= lookupHash[char];
        found[char]--;

        const isNotEnough = found[char] < lookupHash[char]
        if (isCounted && isNotEnough) {
          foundLength--;
        }
      }

      l++;
    } else { // expand window
      const char = s[r];

      if (lookupHash[char]) {
        if (typeof found[char] !== 'number') {
          found[char] = 1;
        } else {
          found[char]++;
        }

        const isNotCounted = (found[char] - 1) < lookupHash[char];
        const isEnough = found[char] === lookupHash[char];
        if (isNotCounted && isEnough) {
          foundLength++;
        }
      }
      r++;
    }

    if (foundLength === lookupLength) { // update shortest
      const currentLength = r - l;

      if (shortest === null || currentLength < shortest.length) {
        shortest = s.substring(l,r);
      }
    }

    isShrink = foundLength === lookupLength || r === s.length;
  }

  return shortest === null ? '' : shortest;
};
