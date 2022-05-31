/**
 * @param {number[]} nums
 * @return {boolean}
 We can have hash, where we save our vals
 Iterate by array, check if already met
 if yes - return true
 if no - save at hash
 after return false
 O(n), O(n)

 Optimized approach
 sort arr,
 Iterate, compare with prev val
 if same - return true
 after return false
 O(log(n) + n), O(1)

 */
var containsDuplicate = function(nums) {
    /*
    // First approach
    if (nums.length < 2) {
        return false;
    }

    const hash = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hash[num]) {
            return true;
        }

        hash[num] = true;
    }

    return false;
    */

    // Optimized approach
    if (nums.length < 2) {
        return false;
    }

    nums.sort((a,b) => a - b);

    for(let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }

    return false;
};
