/**
 * @param {number[]} nums
 * @return {number}

 Hash approach
 Iterate, save to hash
 if met - remove from hash, return one last elem
 O(n), O(n/2)

 Sort approach
 We can sort arr,
 Start with 0 position, compare with next,
 if same - update pointer to +2, if not - return res
 O(log(n) + n / 2), O(1)

 Binary approach
 We can XOR each value. If we met twice, that mean second one return value unchanged
 O(n), O(1)
 */
var singleNumber = function(nums) {
  /*
  // sort approach
  if (nums.length === 1) {
      return nums[0];
  }

  nums.sort((a, b) => a - b);

  let i = 0;
  while(i < nums.length) {
      if (nums[i] === nums[i+1]) {
       i+= 2;
      } else {
          return nums[i];
      }
  }
  */

  // Binary approach
  if (nums.length === 1) {
    return nums[0];
  }

  let val = 0;

  for (let i = 0; i< nums.length; i++) {
    val ^= nums[i]
  }

  return val;
};
