/**
 * @param {number[][]} mat
 * @return {number[][]}

 O(n), O(n)
 */
var updateMatrix = function(mat) {
  if (mat.length === 1 && mat[0].length === 1) {
    return mat;
  }

  const res = [];
  const max = mat.length * mat[0].length + 1;

  for(let y = 0; y < mat.length; y++) {
    for(let x = 0; x < mat[0].length; x++) {
      if (!res[y]) {
        res[y] = [];
      }

      if (mat[y][x] === 0) {
        res[y][x] = 0;
        continue;
      }

      const top = y > 0 ? res[y-1][x] : Infinity;
      const left = x > 0 ? res[y][x - 1] : Infinity;
      res[y][x] = Math.min(top, left) + 1;
    }
  }

  for(let y = mat.length - 1; y >= 0; y--) {
    for(let x = mat[0].length - 1; x >= 0; x--) {

      const bottom = y < (mat.length - 1 ) ? res[y+1][x] : Infinity;
      const right = x < (mat[0].length - 1) ? res[y][x + 1] : Infinity;
      res[y][x] = Math.min(res[y][x], Math.min(bottom, right) + 1);
    }
  }


  return res;
};
