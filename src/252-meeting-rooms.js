/**
 *
 * @param {Array<[number, number]>} meetings
 * Input: [[0,30],[5,10],[15,20]]
 * Output: false
 *
 * Input: [[7,10],[2,4]]
 * Output: true
 *
 * We can sort by start value
 * Check if start of next is greater then start
 * O(log(n) + n), O(1)
 */
function meetingRooms(meetings) {
  if (meetings.length < 2) {
    return true;
  }

  meetings.sort((a, b) => a[0] - b[0]);

  for(let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] < meetings[i - 1][0]) {
      return false;
    }
  }

  return true;
}
