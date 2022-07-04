/**
 * @param {number[]} nums
 * @return {number[][]}

 Naive approach:
 0. Sort arr
 1. For each elem as first
 2. Take each next as second
 3. Look for third as next after second
 4. Check if this pair existed
 5. Save at result

 O(n^3), O(n)

 Optimised approach:
 1. Sort arr
 2. For each from start, create range as next and last (2nd and 3rd)
 3. Look for sum of range bound values equal current
 4. Do until range are empty
 5. If value inside range are duplicate, skip it
 6. If value as first same as prev, skip

 O(n^2), O(n)
 */
var threeSum = function(nums) {
  /*
  // Naive approach
  if (nums.length < 3) {
      return [];
  }

  const res = [];

  nums.sort((a, b) => a-b);

  for (let i = 0; i < nums.length; i++) {
      const first = nums[i];

      for (let j = i + 1; j < nums.length; j++) {
          const second = nums[j];

          for (let k = j + 1; k < nums.length; k++) {
              const third = nums[k];

              if ((first + second + third) === 0) {
                  if (res.every((triplet) => {
                      [f, s, t] = triplet;
                      return !(f === first && s === second && t === third);
                  })) {
                      res.push([first, second, third]);
                  }
              }
          }
      }
  }

  return res;
  */

  // Optimised approach
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a-b);

  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const target = -first;

    if (i > 0 && first === nums[i-1]) {
      continue;
    }

    let rStart = i + 1;
    let rEnd = nums.length - 1;

    while(rStart < rEnd) {
      const second = nums[rStart];
      const third = nums[rEnd];
      const sum = second + third;

      if (sum === target) {
        res.push([first, nums[rStart], nums[rEnd]]);

        while(nums[rStart] === second) {
          rStart++;
        }

        while(nums[rEnd] === third) {
          rEnd--;
        }
      } else if (sum > target) {
        rEnd--;
      } else {
        rStart++;
      }
    }
  }

  return res;
};
