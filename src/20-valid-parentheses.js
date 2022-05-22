/**
 * @param {string} s
 * @return {boolean}

 Naive approach:
 go for each character
 if close - need to check every condition:
   - somewhere before must be opened by same type
   - all nested must be closed
 lastOpened is a stack
 is opened - push to lastOpened
 after all, check is some are opened

 O(n) O(n)


 */
var isValid = function(s) {
  const lastOpened = [];

  for(let i = 0; i < s.length;i++) {
    const val = s[i];
    const isOpened = val === "(" || val === "[" || val === "{";

    if (isOpened) {
      opened.push(val);
    } else {
      const lastOpened = opened.pop();

      if (val === ")" && lastOpened !== "(") {
        return false;
      }

      if (val === "]" && lastOpened !== "[") {
        return false;
      }

      if (val === "}" && lastOpened !== "{") {
        return false;
      }
    }
  }

  return opened.length === 0;
};
