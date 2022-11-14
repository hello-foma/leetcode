/**
 * @param {number[]} nums
 * @return {number[][]}

 We need to return all unique combinations of 3 values, that sums to 0

 1. Go for each pair
 2. Look forward for delta

 O(n^3)

 0. Sort array
 1. We can get each number and find pair for them like two-sum
 2. Look forward for num
 3. If we met same number for a, skip it
 4. for b and c, we have two pointers
 5. if b + c is more than a, move right pointer
 6. if is less - move left pointer

 O(n^2), O(1)
 */
var threeSum = function(nums) {
  const res = [];

  nums.sort((a, b) => a-b);

  const isDublicate = (i) => {
    const isNotFirst = i > 0;
    return isNotFirst && nums[i] === nums[i-1];
  }

  for (let i = 0; i < nums.length;i++) {
    const x = nums[i];

    // skip all dublicates for first elem
    if (isDublicate(i)) {
      continue;
    }

    const target = -x;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const y = nums[left];
      const z = nums[right];
      const sum = y + z;

      if (sum === target) {
        res.push([x,y,z]);
        // when we found our values, skip all dublicates
        // and then go to the next variants
        while (isDublicate(++left)) {}
        right--;
      } else {
        // try to find values
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return res;
};
