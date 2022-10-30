/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}

 We need to detect first bad version
 First bad - when prev are good (or first at all) and current are bad

 We can do binary search with custom check:
 1. If v are good -> go right
 2. If v are bad -> go left
 3. Do until range are not equal to 1 elem
 4. Return num or -1, if not bad

 O(n log n), O(1)
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 0;
    let end = n;

    while(start <= end) {
      const middle = Math.round((start + end) / 2);

      if (isBadVersion(middle)) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return start;
  };
};
