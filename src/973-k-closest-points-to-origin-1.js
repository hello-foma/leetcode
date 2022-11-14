/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}

 Need to return K number of points closest with lowest distance
 Distance calcuated by formula: x^2 + y^2

 We can sort points by this formula and return K closest
 To do so, we can use partial sort (quick select)

 O(n log n)

 Quick select:
 1. Do while
 2. Calculate elem from beginig and end
 3. Compare: swap them, if right is lower, increase index of swapped side
 4. When two indexes met, use as pivot point
 5. Get left subarray, until pivot point to being same as K (or higher)

 */
var kClosest = function(points, k) {
  let start = 0;
  let end = points.length - 1;
  let pivotPoint = start;

  const calculateDist = (nums) => Math.pow(nums[0], 2) + Math.pow(nums[1], 2);

  while(k !== pivotPoint) {
    let pivot = calculateDist(points[end]);

    for(let i = start; i < end; i++) {
      if (calculateDist(points[i]) < pivot) {
        const temp = points[i];
        points[i] = points[pivotPoint];
        points[pivotPoint] = temp;
        pivotPoint++;
      }
    }

    const temp = points[end];
    points[end] = points[pivotPoint];
    points[pivotPoint] = temp;

    if (pivotPoint === k - 1) {
      return points.slice(0, k);
    }

    if (pivotPoint < k - 1) {
      start = pivotPoint + 1;
    } else {
      end = pivotPoint - 1;
    }

    pivotPoint = start;
  }
};
