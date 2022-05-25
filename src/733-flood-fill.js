/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}

 Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
 Output: [[2,2,2],[2,2,0],[2,0,1]]

 paint given pixel
 then paint every pixel in 4-direction
 then for each previously not-painted do the same

 O(n), O(n)
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image.length === 0) {
    return [];
  }

  const isReachable = (y,x) =>
    typeof image[y] !== 'undefined' && typeof image[y][x] !== 'undefined';

  if (!isReachable(sr,sc)) {
    return image;
  }

  const oldColor = image[sr][sc];

  if (oldColor === newColor) {
    return image;
  }

  const stack = [];
  const checkAndMarkPixelToRepaint = (y, x) => {
    if (isReachable(y, x)) {
      if(image[y][x] === oldColor) {
        stack.push([y,x])
      }
    }
  }

  stack.push([sr,sc]);

  while(stack.length) {
    const [y,x] = stack.pop();

    image[y][x] = newColor;

    checkAndMarkPixelToRepaint(y-1, x);
    checkAndMarkPixelToRepaint(y, x + 1);
    checkAndMarkPixelToRepaint(y+1, x);
    checkAndMarkPixelToRepaint(y, x -1);
  }

  return image;
};
