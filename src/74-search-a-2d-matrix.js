/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (target < matrix[0][0] || target > matrix[matrix.length -1 ][matrix[0].length - 1]) {
    return false;
  }

  const getMiddleOfTheRange = (a, b) => {
      if (a === b) {
        return a;
      }

      return Math.floor((a + b) / 2);
    };

  let rowMin = 0;
  let rowMax = matrix.length - 1;
  let rowIndex = getMiddleOfTheRange(rowMin, rowMax);
  let row = matrix[rowIndex];

  while(!(target >= row[0] && target <= row[row.length - 1]) && rowMin !== rowMax && rowMin < rowMax) {
    if (target < row[0]) {
      rowMax = rowIndex - 1;
    } else {
      rowMin = rowIndex + 1;
    }

    rowIndex = getMiddleOfTheRange(rowMin, rowMax);
    row = matrix[rowIndex];
  }

  let valueMin = 0;
  let valueMax = row.length - 1;
  let valueIndex = getMiddleOfTheRange(valueMin, valueMax);
  let value = row[valueIndex];

  while (value !== target && valueMin !== valueMax && valueMin < valueMax) {
    if (target < value) {
      valueMax = valueIndex - 1;
    } else {
      valueMin = valueIndex + 1;
    }

    valueIndex = getMiddleOfTheRange(valueMin, valueMax);
    value = row[valueIndex];
  }

  return value === target;
};
