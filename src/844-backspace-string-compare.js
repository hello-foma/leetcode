/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 We need to iterate by each string from the end
 Until we reach start of both strings
 We have two pointers for each string
 Also for each string we have deletion carry
 If we meet delete character, increase deletion and skip iteration
 If deletion carry, decrease counter and pointer, skip iteration
 compare chars at positions
 if not same - return false
 if same - decreace pointers

 O(n + m), O(1)
 */
var backspaceCompare = function(s, t) {
  if (s === t) {
    return true;
  }

  const delChar = '#';
  let i = s.length - 1;
  let j = t.length - 1;
  let sDelCount = 0;
  let tDelCount = 0;

  while((i >= 0) || (j >= 0)) {
    const sChar = s[i];
    const tChar = t[j];

    if (sChar === delChar) {
      sDelCount++;
      i--;
      continue;
    }

    if (tChar === delChar) {
      tDelCount++;
      j--;
      continue;
    }

    if (sDelCount) {
      sDelCount--;
      i--;
      continue;
    }

    if (tDelCount) {
      tDelCount--;
      j--;
      continue;
    }

    if (sChar !== tChar) {
      return false;
    }

    i--;
    j--;
  }

  return true;
};
