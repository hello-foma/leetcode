/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}

 We need to replace all values at some point and all adjancent similar values;

 1. Need to look top-right-bottom-lefto find similar color
 2. For each new cell, need to do same
 3. Need to keep map of already visited elems (can be as alredy painted?)

 Use recursion (or stack to improve space complexity)

 O(n), O(1)
 */
var floodFill = function(image, sr, sc, color) {
  const initialColor = image[sr][sc];

  if (initialColor === color) {
    return image;
  }

  image[sr][sc] = color;

  const isReachable = (y, x) => {
    return y >= 0 && y < image.length && x >=0 && x < image[0].length;
  }

  const checkAndPaintCell = (y, x) => {
    if (!isReachable(y, x)) {
      return;
    }

    if (image[y][x] === initialColor) {
      floodFill(image, y, x, color);
    }
  }

  // top
  checkAndPaintCell(sr - 1, sc);
  // right
  checkAndPaintCell(sr, sc + 1);
  // bottom
  checkAndPaintCell(sr + 1, sc);
  // left
  checkAndPaintCell(sr, sc - 1);

  return image;
};
