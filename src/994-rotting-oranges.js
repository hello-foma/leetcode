/**
 * @param {number[][]} grid
 * @return {number}

 1. We need to return shortest time to have no fresh (no 1)
 2. If we don't have 1 - return 0
 3. If we don't have 2 - return -1
 4. For each 1, like island, we need to find connected 2
 5. If there are not connected 1 to 2, return -1
 6. We need to take shortest path for each 1
 7. We need to return longest of shortest

 1. For each cell, look for 2 with path index 0
 2. If not visited, place neighbor 1s at queue with path index + 1
 3. Compare path index with longest, update longest
 4. Take from the begining of queue, repeat step 2
 5. Do until empty queue
 6. Check every cell, if find 1 - return -1
 7. return longest

 O(n), O(n)
 */
var orangesRotting = function(grid) {
  let longest = 0;
  let freshOrangesCount = 0;
  const queue = [];

  const isVisited = (y, x) => {
    return grid[y][x] === -1;
  }

  const markAsVisited = (y, x) => {
    grid[y][x] = -1;
  }

  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[0].length; x++) {
      if (isVisited(y,x)) {
        continue;
      }

      if (grid[y][x] === 2) {
        queue.push([[y,x], 0]);
      }

      if (grid[y][x] === 1) {
        freshOrangesCount++;
      }
    }
  }

  while(queue.length) {
    const [[y,x], pathLength] = queue.shift();
    const isReachable = (y, x) => (y >= 0) && (y < grid.length) && (x >= 0) && (x < grid[0].length);
    const isNoOrange = () => grid[y][x] === 0;
    const isFresh = (y,x) => isReachable(y,x) && grid[y][x] === 1;

    if (!isReachable(y,x) || isVisited(y,x) || isNoOrange()) {
      continue;
    }


    if(isFresh(y,x)) {
      freshOrangesCount--;
    }

    markAsVisited(y,x);

    if (pathLength > longest) {
      longest = pathLength;
    }

    const newLength = pathLength + 1;
    // top
    if (isFresh(y - 1, x)) {
      queue.push([[y - 1, x], newLength]);
    }
    // right
    if (isFresh(y, x + 1)) {
      queue.push([[y, x + 1], newLength]);
    }
    // bottom
    if (isFresh(y + 1, x)) {
      queue.push([[y + 1, x], newLength]);
    }
    // left
    if(isFresh(y, x - 1)) {
      queue.push([[y, x - 1], newLength]);
    }
  }


  if (freshOrangesCount !== 0) {
    return -1;
  }

  return longest;
};
