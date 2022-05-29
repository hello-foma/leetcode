/**
 * @param {number[]} nums
 * @return {number}

 Approach 1
 We can create hash from arr and count occurence, return the most often value
 O(n), O(n)

 Approach 2
 Go for each elem and fill with occuriences, return val when occurs more, then n/2
 O(n), O(n)

 Approach 3
 Sort arr, then go for each elem, count same, return val when occurs more, then n/2
 O(log(n) + n), O(1)

 Approach 3
 Save often prop count and val
 Go for each elem, compare with prev val, increment if same, decrement, if not
 after all, return val
 O(n), O(1)

 */
var majorityElement = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let val = nums[0];
  let count = 1;

  for(i = 1; i < nums.length; i++) {
    if (nums[i] === val) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      val = nums[i];
      count = 1;
    }
  }

  return val;
};
