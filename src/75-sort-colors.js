/**
 1. We can usee Quick Sort as most efficient sorting algorthm,
 2. If we need to use in-place sorting, we can choose heap sort
 3. One-pass with only constant extra-space

 1. We know there's only 3 possible values here
 2. We can try four pointers here

 1. Increment iterator
 2. Check value
 3. If color first met, set as pointer
 4. In place if it's index higher than indexes of lower pointers
 4. Check all pointers, if some not in place and higher, swap it
 5. If in place, increase pointer
 5. If firstly met lower, find position before next higher, set it, increase
 *  Increase higher and set values

 * Init set of pointers (-1 as initial val)
 * Iterate by array
 * For first met, check is any higher set
 * Look for spot after lower, if no, set at 0, increment&update all after
 * Increment and set any higher

 O(n), O(1)
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const pointers = [-1,-1,-1];

  const incrementPointers = (index) => {
    for(let i = index; i < pointers.length; i++) {
      if (pointers[i] !== -1) {
        pointers[i]++;
        nums[pointers[i]] = i;
      }
    }
  };

  for(let i = 0; i < nums.length; i++) {
    const val = nums[i];

    const isPointerSet = pointers[val] !== -1;

    if (isPointerSet) {
      incrementPointers(val);
      continue;
    }

    // not set
    let higherIndex = -1;

    for(let h = val - 1; h >= 0; h--) {
      const prevPointerVal = pointers[h];

      if (prevPointerVal === -1) {
        continue;
      }

      higherIndex = h;
      break;
    }

    const isNoAnyPointersSet = higherIndex === -1;
    const higherNumsIndex = pointers[higherIndex];
    const replaceIndex = isNoAnyPointersSet ? 0 : higherNumsIndex + 1;

    pointers[val] = replaceIndex;
    nums[replaceIndex] = val;
    incrementPointers(val + 1);
  }
};
