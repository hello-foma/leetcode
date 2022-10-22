/**
 * @param {number[]} nums
 * @return {number[]}

 We can create array of produce each values before N and after N
 Then return array of produces before and after

 O(n), O(n)


 We can save produce as const from begining to calculate next val and save at result
 Then from end to edit result array
 O(n), O(1)
 */
var productExceptSelf = function(nums) {
  const res = [1];

  let last = 1;

  // prefix
  for(let i = 1; i < nums.length; i++) {
    res[i] = last * nums[i-1];
    last = res[i];
  }

  // suffix
  last = 1;
  for(let i = nums.length - 2; i >= 0; i--) {
    last = last * nums[i + 1];
    res[i] = last * res[i];
  }

  return res;
};
