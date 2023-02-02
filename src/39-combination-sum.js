/*
We need to return multiple combinations of numbers, that sum to target

We can use D&C patter
1. We should start with first number and fill hash map from 0 to n
2. Add another number and tru all combinations from 0 to n
3. Do for each number in set, keep only one hash
4. Return all variants, that is equal n

O(m*n), O(n)

[2,3,6,7], target = 7

hash: { // 3 and 2 and 6 and 7
        1: null,
        2: [[2]],
        3: [[3]],
        4: [[2,2]],
        5: [[2,3]],
        6: [[6], [3,3], [2,2,2]],
        7: [[7],[3,2,2]]
    }

 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const hash = {};
  const putAtHash = (num, candidates) => {
    if(!Array.isArray(hash[num])) {
      hash[num] = [candidates];
    } else {
      hash[num].push(candidates);
    }
  }

  for(let i = 0; i<candidates.length; i++) {
    const num = candidates[i];

    for(let k = 0; k <= target; k++) {
      const delta = k - num;
      if (delta < 0) {
        continue;
      }

      if (delta === 0) {
        putAtHash(k, [num]);
        continue;
      }

      const deltaCandidates = hash[delta];

      if (Array.isArray(deltaCandidates)) {
        deltaCandidates.forEach((deltaCandidate) => {
          putAtHash(k, [...deltaCandidate, num]);
        });
      }
    }
  }

  return Array.isArray(hash[target]) ? hash[target] : [];
};
