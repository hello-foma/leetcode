/**
 * @param {string[]} tokens
 * @return {number}

 For each elem
 is operator
 Apply to prev 2 elems
 Update tokens with new val
 Reduce pointer
 If not operator - increase pointer
 Do until reach end
 return res

 O(n), O(1)
 */

var calculate = (a, b, operator) => {
  switch(operator) {
    case "-":
      return Number(a) - Number(b);
    case "+":
      return Number(a) + Number(b);
    case "*":
      return Number(a) * Number(b);
    case "/":
      const result = Number(a) / Number(b)
      return result > 0 ? Math.floor(result) : Math.ceil(result);
  }
}

var evalRPN = function(tokens) {
  let i = 0;

  while(i < tokens.length) {
    const symbol = tokens[i];

    if (isNaN(Number(symbol))) {
      const a = tokens[i-2];
      const b = tokens[i-1];
      const calculated = calculate(a, b, symbol);

      tokens.splice(i-2, 3, calculated);
      i--;
    } else {
      i++;
    }
  }

  return tokens[0];
};
