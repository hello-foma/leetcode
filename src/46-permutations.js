/*
We need to return all possible variants of nums, we can use num only once
Each variant should use all nums

We can make use a backtrace to find all possible variants

1. Iterate by nums
2. For each iteration, use rest of nums
3. Try next depth, until we reach bottom
4. The take step back and try another index

Use recursion:
find(usedIndex) {
    ifAllUsed() {
        putAtResult
    }
    forAllIndex() {
        ifNotUsed() {
            find(usedIndex + new)
        }
    }
}

O(n^2)

                        (1,2,3,4)
                      /                                 \
              [1] (2,3,4)                               [2] (1,3,4)
         /                     \                \
       [1,2] (3,4)                  [1, 3] (2,4)        [1,4] (2,3)
     /            \                 /           \
 [1, 2, 3] (4)     [1,2,4] (3)   [1,3,2](4)   [1,3,4] (2)
     /              /               /               \
 [1,2,3,4]    [1,2,4,3]         [1,3,2,4]           [1,3,4,2]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  const result = [];

  for(let i = 0; i < nums.length;i++) {
    const filterdKeys = nums.filter((_,k) => k!== i);
    result.push(...permute(filterdKeys).map(slice => [nums[i], ...slice]));
  }

  return result;
};

var permute3 = function(nums) {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  const result = [];

  const findByUsed = (keys, path) => {
    if (keys.length === 0) {
      result.push(path);

      return;
    }

    for(let i = 0; i < keys.length; i++) {
      const filterdKeys = keys.filter((_,k) => k!== i);
      findByUsed(filterdKeys, [...path, keys[i]]);
    }
  };

  findByUsed(nums, []);

  return result;
};

var permute2 = function(nums) {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  const result = [];

  const findByUsed = (used, usedKeys) => {
    const isAllUsed = used.length === nums.length;
    if (isAllUsed) {
      result.push(used);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!usedKeys[i]) {
          findByUsed([...used, nums[i]], {...usedKeys, [i]: true});
        }
      }
    }
  };

  findByUsed([], {});

  return result;
};
