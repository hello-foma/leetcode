/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}

 Recursion approach:
 We need to divide sum by the highest coin
 Then rest divide by new higest
 If we got 0 as rest - that is our result
 If cant divide, step back and try next highest
 Until we got empty coins
 return -1

 1. For each coin
 2. Calculate number of coins and rest
 3. If rest equal 0 - return
 4. If rest > 0, try rest with smaleer icons
 5. Id nested rest return 0, sum their coins amount with current
 6. If no, return -1;

 n - number of coins
 O(n^2), O(n^2)

 dp approach:
 Calculate lower count for each amount start from zero to amount
 To calculate lower, take each coin and calculate rest amount
 Take rest count from prev DP
 If each coin is greater then amount or rest DP are -1 - return -1
 return dp[amount];

 O(n*m), O(n)

 */
var coinChange = function(coins, amount) {
  /*
  const hash = {};

  var coinChangeRc = (coins, amount) => {
      if (coins.length === 0) {
      return -1;
  }

  if (amount === 0) {
      return 0;
  }

  if (hash[amount]) {
      return hash[amount];
  }

  coins.sort((a, b) => b - a);

  let lowestCount = Infinity;
  for (let i = 0; i < coins.length; i++) {
      let count = Math.floor(amount / coins[i]);

      while(count) {
          const rest = amount - count * coins[i];
          console.log({amount, count, rest, coin: coins[i], coins});

          if (rest === 0) {
             lowestCount = Math.min(lowestCount, count);
             hash[amount] = lowestCount;
          } else {
              const restCount = coinChangeRc(coins.slice(i + 1), rest);
              if (restCount !== -1) {
                  lowestCount = Math.min(lowestCount, count + restCount);
                  hash[amount] = lowestCount;
              }
          }

          count--;
      }
  }

  return lowestCount === Infinity ? -1 : lowestCount;
  };

  */

  // DP approach

  if (coins.length === 0) {
    return -1;
  }

  if (amount === 0) {
    return 0;
  }

  const dp = {0: 0};


  for (let i = 1; i <= amount; i++) {
    let lowest = Infinity;

    for(let j = 0; j < coins.length; j++) {
      const rest = i - coins[j];

      if (rest >= 0 && (dp[rest] !== -1)) {
        lowest = Math.min(lowest, dp[rest] + 1);
      }
    }

    dp[i] = lowest === Infinity ? -1 : lowest;
  }

  return dp[amount];
};
