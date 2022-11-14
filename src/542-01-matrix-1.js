/**
 * @param {number[][]} mat
 * @return {number[][]}

 Need to update matrix. Each cell value need to show how distant closest zero

 1. Need to visit each cell to find zeros
 2. For each zero, update neighbors cells with increase distance
 3. Do it again, until visit every cell (can be calculated by counter)


 0. Create hash of visited {[r][c]: boolean}
 1. Visit every cell and place every zero at queue
 2. While counter less than m*n
 3. Pop from queue, check if visited
 4. If not visited, mark as visited
 5. Increase counter
 6. Update matrix value
 7. Put neighbours at queue with deep increase

 O(n), O(n)

 */
var updateMatrix = function(mat) {
  const visited = {};
  const queue = [];

  for(let r = 0; r < mat.length; r++) {
    for(let c = 0; c < mat[0].length; c++) {
      const cell = mat[r][c];

      if (cell === 0) {
        queue.push([r,c,0]);
      }
    }
  }

  const markAsVisited = (r, c) => {
    if (typeof visited[r] === 'object') {
      visited[r][c] = true;
    } else {
      visited[r] = {[c]: true};
    }
  }

  const checkAndPutAtQueue = (r, c, dist) => {
    if (r >= 0 && r < mat.length && c >= 0 && c < mat[0].length) {
      queue.push([r,c,dist]);
    }
  }

  let i = 0;

  while(i < queue.length) {
    const [r, c, dist] = queue[i];
    const isVisited = typeof visited[r] === 'object' && visited[r][c];

    if (isVisited) {
      i++;
      continue;
    }


    markAsVisited(r,c);
    mat[r][c] = dist;

    // top
    checkAndPutAtQueue(r-1, c, dist+1);
    // right
    checkAndPutAtQueue(r, c+1, dist+1);
    // bottom
    checkAndPutAtQueue(r+1, c, dist+1);
    //left
    checkAndPutAtQueue(r, c-1, dist+1);

    i++;
  }

  return mat;
};
