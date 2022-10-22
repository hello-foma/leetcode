/*
Binary search
We need to return target index
Otherwise - return -1;

1. We need to have two bounds - left and right;
2. Get middle of bounds;
3. Compare middle value with target
4. If middle equals to target - return index of middle
5. If target greater than middle - move right (update left bound to middle +1)
6. Otherwise move left
7. Do it again until left is smaller than right
8. return -1, because we didn't found anything.


O(log n), O(1)
*/
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] > target) {
      // move left
      right = middle - 1;
    } else {
      // move right
      left = middle + 1;
    }

  }

  return -1;
};
