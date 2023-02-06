/*
Calculate how many ways (combinations of 1 and 2) to reach n

We know that res[n] = res[n - 1] + res[n - 2]
We can calculate all variants from 0 to n, return n
Save all results at hash table
We can save only last results for n-1 and n-2

O(n), O(1)
 */

/*
0 = 0

1 =
1 - (1) + 1 = 0
= 1

2 =
2 - (1) + [1] = 1
2 - (2) = 1
= 2

3 =
3 - (1) = [2] = 2
3 - (2) = [1] = 1
= 3

4 =
4 - (1) = [3] = 3
4 - (2) = [2] = 2
= 5

5 =
5 - (1) = [4] = 5
5 - (2) = [3] = 3
= 8
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }

  let optOne = 1;
  let optTwo = 2;

  for (let i = 3; i <= n; i++) {
    const newMax = optOne + optTwo;
    optOne = optTwo;
    optTwo = newMax;
  }

  return optTwo;
};
