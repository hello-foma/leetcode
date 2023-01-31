/*
Calculate number of islands
Island - is a connected group of '1'

Do DFS by stack
1. Iterate by each value at grid
2. Check if it's already visited - go next
3. mark as visited
3. put heighbours at stack
4. do while stack are not empty
5. check stack value
6. if visited, skip
7. if 1 - put all neighbour to stack
8. after stack is empty, increase islands count

O(n), O(1)
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandsCount = 0;

  const isReachable = (y, x) => y >= 0 && y < grid.length && x >= 0 && x < grid[0].length;
  const putNeighbours = (y, x, stack) => {
    const checkAndPut = (y, x) => {
      if (isReachable(y, x)) {
        if (grid[y][x] === '1') {
          stack.push([y, x]);
        }
      }
    }
    checkAndPut(y+1, x); // top
    checkAndPut(y, x + 1); // right
    checkAndPut(y - 1, x); // bottom
    checkAndPut(y, x - 1); //right
  }

  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[0].length; x++) {
      const val = grid[y][x];

      if (val === -1) { // visited
        continue;
      }

      grid[y][x] = -1;

      if (val === '1') {
        islandsCount++;

        const stack = [];

        putNeighbours(y, x, stack);

        while(stack.length) {
          const [y,x] = stack.pop();
          grid[y][x] = -1;

          putNeighbours(y, x, stack);
        }
      }
    }
  }

  return islandsCount;
};
