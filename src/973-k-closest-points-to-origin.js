/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 formula is pow(y, 2) + pow(x,2)
 Quicksort by formula
 - take start end and
 - take middle value
 - compare start with middle value
 - if start is smaller - increase start
 - otherwise swap start value with end value and decrease end
 - do until start and end meet
 - if current start are smaller then middle, increase start
 - call quicksort for left (from start to pivot-1) and right (pivot, end), until range is greater then one
 return first k elements
 */
var kClosest = function(points, k) {
  if (points.length < k) {
    return [];
  }

  if (k === 0) {
    return [];
  }

  const calculateDist = (point) => {
    const [x, y] = point;

    return Math.pow(x, 2) + Math.pow(y, 2);
  }

  const partition = (start, end) => {
    const middle = start + Math.floor((end - start) / 2);

    const middleVal = calculateDist(points[middle]);
    let left = start;
    let right = end;

    while(left < right) {
      if (calculateDist(points[left]) < middleVal) {
        left++;
      } else {
        [points[left], points[right]] = [points[right], points[left]];
        right--;
      }
    }

    if (calculateDist(points[left]) <= middleVal) {
      left++;
    }

    return left;
  };

  let start = 0;
  let end = points.length - 1;
  let pivot = points.length;

  while(pivot !== k) {
    pivot = partition(start, end);
    if (pivot < k) {
      start = pivot;
    } else {
      end = pivot - 1;
    }
  }

  return points.slice(0, k);
};
