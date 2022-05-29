/**
 * @param {number} n
 * @return {number}
 [1] => [1]
 [1, 2] => [1, 2], [2]
 [1, 2, 3] => [1,2,3], [2,3], [1,3]
 [1, 2, 3, 4] => [1, 2, 3, 4], [1,2,4], [2,3,4], [2,4], [1,3,4]
 [1,2,3,4,5] => [1,2,3,4,], [1,2,4,], [1,3,4,], [1,3,], [2,3,4,], [2,3,], [2,4,5]


 We can calculate by formula
 fun(n) = fun(n-1) + fun(n-2)
 We need to save calculations to dp

 O(n), O(n),

 Improved complexity:
 We can go from zero (or 2) to n, keep only two last calculations
 O(n), O(1)
 */
var climbStairs = function(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const dp = {
    0: 0,
    1: 1,
    2: 2
  };


  const calculate = (n) => {
    if (typeof dp[n] === 'number') {
      return dp[n];
    }

    const val = calculate(n-1) + calculate(n-2);
    dp[n] = val;

    return val;
  }

  return calculate(n);
};
