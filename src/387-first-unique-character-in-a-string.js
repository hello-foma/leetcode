/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const hash = {};

  for (let i = 0; i< s.length; i++) {
    if (typeof hash[s[i]] === 'number') {
      hash[s[i]] = -1;
    } else {
      hash[s[i]] = i;
    }
  }

  const uniquePos = Object.values(hash);

  if (uniquePos.length === 0) {
    return -1;
  }

  uniquePos.sort((a, b) => {
    return a === -1 ? 1 : b === -1 ? -1 : a - b;
  });

  return uniquePos[0];
};
