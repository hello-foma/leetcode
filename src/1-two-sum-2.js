/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 We need to find indexes of nums that sum to target
 Always have valid result

 Bruteforce solution:
 1. For each num, take each another
 2. Sum
 3. If result - return indexes
 O(n^2), O(1)

 Optimized solution:
 1. Make hash map where {val: index}
 2. Iterate for each value, looks at hash
 3. If found - return both indexes

 O(n), O(n)
 */
var twoSum = function(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    hash[val] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i];
    const deltaIndex = hash[delta];
    if (typeof deltaIndex === 'number' && deltaIndex !== i) {
      return [i, hash[delta]];
    }
  }
};
