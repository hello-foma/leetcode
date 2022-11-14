/**
 * @param {number[]} nums
 * @return {number}

 We need to find max sum of array, formed by subarray

 1. We can iterate from start to the end and compare prev max with curr sum
 2. Take max sum as subarray, optional with only current elem

 return this sum

 O(n), O(1)
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let totalMaxSum = nums[0];
    let currSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        const curVal = nums[i];
        const newSum = currSum + curVal;

        currSum = Math.max(curVal, newSum);
        totalMaxSum = currSum > totalMaxSum ? currSum : totalMaxSum;
    }

    return totalMaxSum;
};
