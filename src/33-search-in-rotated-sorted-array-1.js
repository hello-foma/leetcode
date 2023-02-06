/*
We need to do binary search with custom logic
If shift is 0 - do as usual
We can detect shift by compare target, middle and bound

If we need bigger value:
we can go right if right is bigger or equal target
or
if left is lower than middle

If we need lower value:
if target greater or equal left, we can go left
or
if right is greater than middle => go left

O(log n), O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let l = 0;
  let r = nums.length - 1;

  while(l<=r) {
    const m = Math.floor((l+r) / 2);
    const middle = nums[m];
    const left = nums[l];
    const right = nums[r];
    const moveLeft = () => r = m-1;
    const moveRight = () => l = m+1;

    if (middle === target) {
      return m;
    }


    if (target < middle) {
      if (target >= left || right >= middle) {
        moveLeft();
      } else {
        moveRight()
      }
    } else {
      if (right >= target || left <= middle) {
        moveRight();
      } else {
        moveLeft();
      }
    }

  }

  return -1;
};
