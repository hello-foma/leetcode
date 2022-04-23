/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    let isContainsDuplicate = false;

    for (var i = 0; i < nums.length; i++) {
        const num = nums[i];

        const isAlreadyHave = hash[num] === true;

        if (isAlreadyHave) {
            isContainsDuplicate = true;
            break;
        }

        hash[num] = true;
    }

    return isContainsDuplicate;
};
