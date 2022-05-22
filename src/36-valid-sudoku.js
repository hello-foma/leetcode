/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let hash = {};

  const isValueValid = (value) => {
    if (value === '.') {
      return true;
    }

    if (hash[value]) {
      return false;
    }

    hash[value] = true;
    return true;
  }

  for (let i = 0; i <  board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!isValueValid(board[i][j])) {
        return false;
      }
    }
    hash = {};
  }
  for (let i = 0; i <  board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!isValueValid(board[j][i])) {
        return false;
      }
    }
    hash = {};
  }

  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 3; l++) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!isValueValid(board[(3 * k)+i][(3 * l)+j])) {
            return false;
          }
        }
      }
      hash = {};
    }
  }

  return true;
};
