/**
 * @param {number} n - a positive integer
 * @return {number}
 Input: n = 00000000000000000000000000001011
 Output: 3

 Naive approach
 count
 We can go for each symbol and increment count if 1
 O(n), O(1)
 */
var hammingWeight = function(n) {
  let count = 0;
  const binary = n.toString(2);
  for(let i = 0; i < binary.length; i++) {
    count += Number(binary[i]);
  }

  return count;
};
