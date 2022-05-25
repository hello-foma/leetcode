/**
 * @param {number[]} prices
 * @return {number}

 Input: prices = [7,1,5,3,6]
 Output: 5

 First approach:
  Go through each value from end and find maximum difference
  max diff for val is prev difference + diff with prev or diff with prev
  save new max diff
  return max diff
 O(n), O(1)

 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let finalDif = 0;
  let prevDif = 0;

  for(let i = prices.length - 2; i >= 0; i--){
    const diffWithPrev = prices[i+1] - prices[i];
    const diffWithPrevDiff = diffWithPrev + prevDif;

    prevDif = Math.max(diffWithPrev, diffWithPrevDiff);
    finalDif = Math.max(finalDif, prevDif);
  }

  return finalDif;
};
