/**
 * @param {character[][]} grid
 * @return {number}

 1. We need to check every node
 2. If this is 1 - that is island or part of it
 3. We need to check all adjacent cells and mark it as part of island (if it's 1)
 4. We need to return total number of islands

 0. We have visited mark (as -1 on input arr) and total counter
 1. Check every node by for loop, if 1 - increase islands counter
 2. If already visited - skip
 3. Mark as visited
 4. Check cells top-right-bottom-left recursively
 5. return counter

 O(n), O(1)

 */
var numIslands = function(grid) {
  let total = 0;

  const checkNode = (y, x) => {
    if ((y < 0) || (y > grid.length - 1) || (x < 0 )|| (x > grid[0].length - 1)) {
      return;
    }

    if (grid[y][x] === -1) {
      return;
    }

    const isIsland = grid[y][x] === "1";
    grid[y][x] = -1;

    if (!isIsland) {
      return;
    }

    // top
    checkNode(y-1, x);
    // right
    checkNode(y, x + 1);
    // bottom
    checkNode(y+1, x);
    // left
    checkNode(y, x-1);
  };

  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[0].length; x++) {
      const isVisited = grid[y][x] === -1;

      if (isVisited) {
        continue;
      }

      const isIsland = grid[y][x] === "1";

      if (isIsland) {
        total++;
        checkNode(y, x);
      }

    }
  }

  return total;
};
