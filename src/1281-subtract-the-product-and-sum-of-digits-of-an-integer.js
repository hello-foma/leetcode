/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digits = String(n).split('');
  const product = digits.reduce((prod, digit) => {
    prod *= Number(digit);

    return prod;
  }, 1);

  const sum = digits.reduce((prod, digit) => {
    prod += Number(digit);

    return prod;
  }, 0);

  return product - sum;
};
