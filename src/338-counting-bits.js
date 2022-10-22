/**
 * @param {number} n
 * @return {number[]}

 We need to go from 1 to n and fill result
 Each value we can store at dp
 For each new value, its value = 1 + dp[pow - n]
 We can improve pow each time when pow * 2 === n

 O(n), O(n)

 */
var countBits = function(n) {
  if (n === 0) {
    return [0];
  }

  const dp = [
    0
  ];


  let pow = 1;

  for(let i = 1; i <= n; i++) {
    if (pow*2 === i) {
      pow *= 2;
    }

    dp[i] = 1 + dp[i - pow];
  }

  return dp;
};
