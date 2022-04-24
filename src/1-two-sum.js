/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const asc = [...nums].sort((a, b) => a-b);

  let sum;
  let i = 0;
  let j = asc.length - 1;

  while(sum !== target) {
    sum = asc[i] + asc[j];

    if (sum > target) {
      j--;
    }

    if (sum < target) {
      i++;
    }
  }

  const a = nums.indexOf(asc[i]);
  const isEqual = asc[i] === asc[j];
  const b = isEqual ? nums.indexOf(asc[j], a + 1) : nums.indexOf(asc[j]);

  return [a, b];
};
