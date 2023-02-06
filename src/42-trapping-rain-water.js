/**
 Calculate how many units of water can be stored by cell of height map

 1. Water can be stored if height of current bottom less than left and right walls
 2. Walls can be in distance
 3. Higher wall overlaps smaller

 1. Iterate through array
 2. Get hight at current index
 3. Calculate delta with same height at hash
 4. Put delta at result
 5. Update hash position
 6. Do 3-5 for each lower height
 * Can we reduce complexity by keep only highest point?
 O(n*m), O(m) where n -> values length, m -> maximum height

 We can keep only that values what different from max

 {
    3: 6,
}

 10 - 8 - 1 = 1
 7-6-1=0
 res = 6



 Improved solution:
 1. Init two pointers: to the start and to the end
 2. Init maxL and maxR = 0
 2. While left pointer less than right
 3. Get value from left
 4. Calculate: get min of maxL and maxR, reduce by val at index
 5. If new value is higher, than max, update max
 6. while maxR < maxLeft, do same calculate with r, reduce r pointer
 7. increase l pointer
 8. return result

 O(n), O(1)

 [0,1,0,2,1,0,1,3,2,1,2,1]
 !
 !***!!*!
 _!*!!*!!!!!!


 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length <= 2) {
    return 0;
  }

  let result = 0;
  let maxL = 0;
  let maxR = 0;
  let l = 0;
  let r = height.length - 1;

  const calculateAndUpdateResult = (val) => {
    const min = Math.min(maxL, maxR);
    const delta = min - val;

    if (delta > 0) {
      result += delta;
    }
  }

  while (l <= r) {
    const val = height[l];

    calculateAndUpdateResult(val);

    if (maxL < val) {
      maxL = val;
    }

    while(maxR < maxL) {
      const val = height[r];

      calculateAndUpdateResult(val);

      if (maxR < val) {
        maxR = val;
      }

      r--;
    }

    l++;
  }


  return result;
}
/**
 * @param {number[]} height
 * @return {number}
 */
var trap1 = function(height) {
  if (height.length <= 2) {
    return 0;
  }

  let result = 0;
  const hash = {};

  for(let i = 0; i < height.length; i++) {
    const maxHeight = height[i];

    for(h = maxHeight; h > 0; h--) {
      const prevVal = hash[h];

      if (typeof prevVal === 'number') {
        result += i - prevVal - 1;
      }

      hash[h] = i;
    }
  }

  return result;
};
