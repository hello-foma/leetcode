/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  let lastRow = 0;
  let lastCol = 0;
  let res = [];

  for(let i = 0; i < r; i++) {
    const row = [];

    for (let j = 0; j < c; j++) {
      const val = mat[lastRow][lastCol++];
      row.push(val);

      if (lastCol >= mat[0].length) {
        lastCol = 0;
        lastRow++;
      }
    }

    res.push(row);
  }

  return res;
};
