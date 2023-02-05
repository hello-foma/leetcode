/**
 Need to find most common element

 1. Iterate by array
 2. increasee counter if elem equal prev
 3. if not equal - decrease
 4. if counter equal 0 => increase and update majority prop
 5. Return majority
 [2,2,1,1,1,2,2]
 m: 2, c: 1
 O(n), O(1)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length <= 2) {
    return nums[0];
  }

  let majority = null;
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (majority === null) {
      majority = val;
      count = 1;
    } else if (majority !== val && count === 1) {
      majority = null;
      count = 0;
    } else {
      count += majority === val ? 1 : -1;
    }
  }

  return majority;
};
