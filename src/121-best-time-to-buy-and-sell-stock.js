/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let currentProfit = 0;
  for(let i = prices.length - 2; i >= 0; i--) {
    const oneDayProfit = prices[i+1] - prices[i];

    currentProfit = Math.max(oneDayProfit, oneDayProfit + currentProfit);
    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
};
