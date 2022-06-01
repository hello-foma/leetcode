/**
 * @param {string[]} strs
 * @return {string}

 We can go for each letter at first word and check it at other words
 If all same, save to res, go next
 if one not same - return result

 O(n), O(1)
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  for(let i = 0;i < strs[0].length; i++) {
    const letter = strs[0][i];
    for(let j = 0; j < strs.length; j++) {
      let word = strs[j];
      if ((word.length - 1 < i) || word[i] !== letter) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};
