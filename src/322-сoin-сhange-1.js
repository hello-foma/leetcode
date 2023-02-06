/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 1. Create hash with fewest
 2. place at hash value of each coin
 3. Calculate amount - n, until meet 1 coin, save result at hash
 4. Is no 1 coin, return -1
 5. Start from greater coins, then lesser
 6. If already have hash value, there's no best variant, use them

 O(n^2), O(n)
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const hash = {};

  for(let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    hash[coin] = 1;
  }

  const calculateFewest = (target) => {
    if (target < 0) {
      return -1;
    }

    if (hash[target]) {
      return hash[target];
    }

    let localFewest = Infinity;
    for(let i = 0; i < coins.length; i++) {
      const coin = coins[i];

      const result = calculateFewest(target - coin);

      if (result !== -1) {
        localFewest = Math.min(localFewest, result + 1);
      }
    }

    hash[target] = localFewest === Infinity ? -1 : localFewest;

    return hash[target];
  }

  return calculateFewest(amount);
};
