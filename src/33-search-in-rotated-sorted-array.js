/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

 Do binary search with custom check

 1. If start of range are less, than mid, that can be normal range
 2. If start of range are less than target and target are lower than mid, go left
 3. or go right
 4. If start of range higher than mid, pivot can be on left
 5. If target are higher than value, its can be on right on on left if its higher than start
 */
var search = function(nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const val = nums[middle];

    if (target === val) {
      return middle;
    }

    if (nums[start] <= val) {
      if (target < val && nums[start] <= target) {
        // go left
        end = middle - 1;
      } else {
        // go right
        start = middle + 1;
      }
    } else {
      if (target < val || nums[start] <= target) {
        // go left
        end = middle - 1;
      } else {
        // go right
        start = middle + 1;
      }
    }
  }

  return -1;
};
