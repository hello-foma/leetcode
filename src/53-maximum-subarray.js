/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let localMax;
    let globalMax;

    nums.forEach((num, index) => {
        if (index === 0) {
            localMax = num;
            globalMax = num
        } else {
            localMax = Math.max(num + localMax, num);
            if (localMax > globalMax) {
                globalMax = localMax;
            }
        }
    });

    return globalMax;
};
