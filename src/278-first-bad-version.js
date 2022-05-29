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
 We can do Binary Search to find left bound when versions became corrupt
 If version is valid, go right
 If version is broken - go left
 When we met range of only one elem, return is it broken
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (n === 0) {
      return 0;
    }

    let startPos = 0;
    let endPos = n;
    let firstBroken = -1;

    while(startPos <= endPos) {
      const index = Math.trunc((startPos + endPos) / 2);
      if (isBadVersion(index)) {
        // go to the left
        firstBroken = index;
        endPos = index - 1;
      } else {
        // go to the right
        startPos = index + 1;
      }
    }

    return firstBroken;
  };
};
