/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  return (high-low + high % 2 + low % 2) / 2;
}
