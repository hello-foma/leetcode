/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}

 We need to sort intervals
 1. Intervals are sorted
 2. Merge can overlaps (or not)

 1. Create res empty arr
 2. Iterate by intervals to find begin of inserted
 3. We have three states: insert start, insert end, complete
 4. While not complete
 5. find place to insert start
 6. then find place to insert end
 7. then complete
 8. return result array

 Insert start state:
 1. if iStart greater than start, place start at res
 2. if iStart and iEnd are lower - increase i
 3. if iStart lower (or equal), but iEnd are greater - place at res iStart, change state

 Insert end state:
 1. if iStart are greater than end, insert at last elem of res end, update state
 2. if iStart and iEnd are lower than end, increase i
 3. if iStart are lower (or equal) and iEnd are greater (or equal), place greater, update state

 after place, complete rest to res

 O(n), O(1)

 */
var insert = function(intervals, newInterval) {
  const res = [];
  const placingState = {
    start: 'start',
    end: 'end',
    complete: 'complete'
  };

  let currentState = placingState.start;
  let i = 0;

  while(currentState !== placingState.complete) {
    // Case when newInterval need to place after intervals
    if (i > intervals.length - 1) {
      switch (currentState) {
        case placingState.start:
          res.push(newInterval);
          break;
        case placingState.end:
          res[res.length - 1].push(newInterval[1]);
          break;
      };
      break;
    }

    const iStart = intervals[i][0];
    const iEnd = intervals[i][1];

    const nStart = newInterval[0];
    const nEnd = newInterval[1];

    switch(currentState) {
      case placingState.start:
        if (iStart > nStart) {
          res.push([nStart]);
          currentState = placingState.end;
        } else if (iEnd >= nStart) {
          res.push([iStart]);
          currentState = placingState.end;
        } else {
          res.push(intervals[i]);
          i++;
        }
        break;
      case placingState.end:
        if (iStart > nEnd) {
          res[res.length - 1].push(nEnd);
          currentState = placingState.complete;
        } else if (iEnd >= nEnd) {
          res[res.length - 1].push(iEnd);
          i++;
          currentState = placingState.complete;
        } else {
          i++;
        }
        break;
    }
  }

  for (i + 1;i<intervals.length;i++) {
    res.push(intervals[i]);
  }

  return res;

};
