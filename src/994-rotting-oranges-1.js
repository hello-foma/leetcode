/*
Need to count amount of minutes that required to make all oranges are rotten
Fresh orange became rotten if adjacent to rotten
Minutes amount - is iterations count
If there is no changes for iteration, return result
If there is fresh oranges still - return -1

we can with putting all rotten oranges to stack
mark every rotten as visited (?)
for next iteration, mark all adjacent fresh as rotten (put at stack)
increase iterations counter
do until there are no new rotten (or fresh)

if there are any fresh left - return -1, otherwise, return iterations count
BFS

Can we improve to O(n)?
O(n), O(n)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const queue = [];
  let freshCount = 0;
  const putAllNeighbors = (y, x, minute) => {
    const isReachable = (y, x) => y >= 0 && y < grid.length && x >= 0 && x < grid[0].length;

    const checkAndPut = (y, x) => {
      if (isReachable(y, x) && grid[y][x] === 1) {
        grid[y][x] = -1;
        queue.push([y,x, minute]);
      }
    }

    checkAndPut(y - 1, x); // top
    checkAndPut(y, x + 1); // right
    checkAndPut(y + 1, x); // bottom
    checkAndPut(y, x - 1); // right
  }

  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[0].length; x++) {
      const val = grid[y][x];

      if (val === 1 || val === -1) {
        freshCount++;
      }

      if (val === 2) {
        putAllNeighbors(y, x, 1);
      }
    }
  }

  for (let i = 0; i < queue.length; i++) {
    const [y,x,minute] = queue[i];
    freshCount--;
    putAllNeighbors(y, x, minute + 1);
  }

  if (freshCount !== 0) {
    return -1;
  }

  if (queue.length === 0) {
    return 0;
  }

  return queue[queue.length - 1][2];
};
