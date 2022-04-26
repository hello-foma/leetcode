/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n.toString(2).split('').reduce((sum, n) => {
    sum = sum + Number(n);

    return sum;
  }, 0)

};
