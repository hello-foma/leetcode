/**
 * @param {number[]} nums
 * @return {number}
 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.

 For elem max is elem or elem + previous max
 Get max of all
 Save total maximum
 Save local maximum
 for each elem we calculate elem maxim which is local + current

 O(n), O(1)
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let total = -Infinity;
    let local = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        local = Math.max(nums[i], local + nums[i]);
        if (local > total) {
            total = local;
        }
    }

    return total;
};
