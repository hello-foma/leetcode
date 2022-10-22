/**
 * @param {string} s
 * @return {boolean}

 Need to detect if string with brackets are valid

 1. We can iterate for each char
 2. If opening - put at array
 3. If close - remove from array
 4. If close not same type - string is not valid
 5. If close more than open - string is not valid
 6. Count of open brackets must be 0

 O(n), O(n)

 */
var isValid = function(s) {
  const stack = [];

  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    const isOpenning = char === '(' || char === '[' || char === '{';

    if (isOpenning) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const lastOpenning = stack.pop();

      const isValid = (() => {
        switch (lastOpenning) {
          case '(':
            return char === ')';
          case '[':
            return char === ']';
          case '{':
            return char === '}';
        }
      })();

      if (!isValid) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
