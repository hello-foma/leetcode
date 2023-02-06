/**
 We need to merge all intervals
 Intervals can be merged if they are overlapping
 Intervals are not sorted.
 One interval my overlap other intervals in advance

 if sorted:
 Create res array
 Go for each interval, place start
 Look for end:
 1. Iterate by intervals (end,start)
 2. Compare end with next start
 3. If end less than next start - skip it
 4. If there's no next elem - place last saved end
 5. do until reach end

 O(n logn()), O(n)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0])

  const result = [];
  let localEnd = null;
  let i = 0;

  while(i < intervals.length) {
    const [start, end] = intervals[i];

    const isNeedToOpen = result.length === 0 || (result[result.length - 1].length === 2);
    const isNoNext = i === (intervals.length - 1);

    if (isNeedToOpen) {
      result.push([start]);
      localEnd = end;

      if (isNoNext) {
        result[result.length - 1].push(localEnd);
      }
      i++;
    } else if (localEnd < start) {
      result[result.length - 1].push(localEnd);
      localEnd = null;
    } else {
      localEnd = localEnd > end ? localEnd : end;

      if (isNoNext) {
        result[result.length - 1].push(localEnd);
      }
      i++;
    }
  }

  return result;
};
