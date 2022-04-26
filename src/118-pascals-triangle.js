/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [];
  const values = {};
  const rows = {};

  for(let i = 1; i <= numRows; i++) {
    const rowIndex = (i * (i+1)) / 2;
    rows[i] = rowIndex;
    const row = [];

    for (let j = 1; j <= i; j++) {
      const collIndex = (rows[i -1] || 0) + j;
      const parents = (() => {
        const prevRowIndex = rows[i-1];
        if (!prevRowIndex) {
          return [0, 0];
        }

        if (prevRowIndex === 1) {
          return [1, 0]
        }
        const firstParentIndex = prevRowIndex - (rowIndex - collIndex);
        const firstParent = j === 1 ? 0 : values[firstParentIndex];
        const secondParent = j === i ? 0 : values[firstParentIndex + 1];

        return [firstParent, secondParent];
      })()

      const value = parents[0] + parents[1] || 1;

      values[collIndex] = value;
      row.push(value);
    }

    res.push(row);
  }

  return res;
};
