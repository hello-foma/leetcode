/**
 * @param {string[]} tokens
 * @return {number}

 We need to calculate by RPN
 1. We have stack of values
 2. Go trought input
 3. Put each value at stack
 4. When we met operator, proceed with two last elems at stack
 5. put result of calculations at stack
 6. return single elem from result stack

 Division truncate toward zero? Like floor?

 O(n), O(n)
 */
var evalRPN = function(tokens) {
  if (tokens.length === 1) {
    return Number(tokens[0]);
  }

  const stack = [];

  const isOperator = (val) => {
    return val === '+' ||
      val === '-' ||
      val === '*' ||
      val === '/';
  }

  for (let i = 0; i < tokens.length; i++) {
    const elem = tokens[i];

    if (isOperator(elem)) {
      const b = Number(stack.pop());
      const a = Number(stack.pop());
      switch (elem) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          const res = a / b;
          // Do round to be closer to zero
          stack.push(res > 0 ? Math.floor(res) : Math.ceil(res));
          break;
      }
    } else {
      stack.push(elem);
    }
  }

  return stack[0];
};
