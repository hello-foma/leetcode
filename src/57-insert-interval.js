/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}

 Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 Output: [[1,5],[6,9]]

 Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 Output: [[1,2],[3,10],[12,16]]
 Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


 Result arr
 for each interval
 Start point:
 is point greater then end of interval
 - put interval at res
 is point belong to interval
 - put at res interval start
 is point before interval
 - put at res start point (check end before?)
 - put interval at res

 End point:
 is point greater then end of interval
 - if its last, add end to res, or do nothing
 is point belong to interval
 - put at res interval end
 is point before interval
 - put at res end point
 - put interval at res
 Interval
 - put at res

 isStartPlaced
 isIntervalPlaced
 pointToCompare


 O(n), O(n)
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  const result = [];
  const [start, end] = newInterval;
  let isStartPlaced = false;
  let isIntervalPlaced = false;

  for(let i = 0; i < intervals.length; i++) {
    const point = isStartPlaced ? end : start;
    const interval = intervals[i];
    if (isIntervalPlaced) {
      result.push(interval);
      continue;
    }
    // is point greater then end of interval
    if (point > interval[1]) {
      if (isStartPlaced) {
        // end of intervals
        if (i === intervals.length - 1) {
          result[result.length - 1].push(end);
          isIntervalPlaced = true;
          continue;
        } else {
          continue;
        }
      } else {
        if (i === intervals.length - 1) {
          // end of intervals
          result.push(interval);
          result.push(newInterval);
          isIntervalPlaced = true;
          continue;
        } else {
          result.push(interval);
          continue;
        }
      }
      // is point belong to interval
    } else if (point >= interval[0] && point <= interval[1]) {
      if (isStartPlaced) {
        result[result.length - 1].push(interval[1]);
        isIntervalPlaced = true;
        continue;
      } else {
        result.push([interval[0]]);
        isStartPlaced = true;
        i--;
        continue;
      }
      // is point before interval
    } else if (point < interval[0]) {
      if (isStartPlaced) {
        result[result.length - 1].push(end);
        isIntervalPlaced = true;
        result.push(interval);
        continue
      } else {
        result.push([start]);
        isStartPlaced = true;
        i--;
        continue;
      }
    }
  }

  return result;
};
