/*
We need to return production of every num at the array except self

1. At first we can create an array of multiply of all befores
2. Array of all multiplies after
3. Third array of produce all before and after

O(n), O(n) <-- can be improved?

1. Iterate by array from left to right
2. Fill new array with produce result
3. iterate from right to left
4. Produce elem and prev result const
5. Fill result array
6. Update prev result at const
7. return result arr
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(1);
      continue;
    }

    const prevNum = nums[i - 1];
    const prevRes = result[i - 1];

    result.push(prevNum * prevRes);
  }

  let prevRightRes = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    const prevNum = nums[i + 1];

    result[i] = result[i] * prevRightRes * prevNum;
    prevRightRes = prevRightRes * prevNum;
  }

  return result;
};
