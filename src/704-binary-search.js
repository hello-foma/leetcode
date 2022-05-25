/**
 * Just a binary search here
 * @param {Array<number>} nums
 * @param  {number} target
 * @returns {number}
 */
function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while(l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return -1;
}
