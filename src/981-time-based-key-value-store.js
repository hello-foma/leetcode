/**
 Need to implement TimeMap
 Each key also contains set of timestamps
 We can set and get value by key by timestamp
 If there's no timeStamp to get, return closest lower timestamp val
 If there's no such key, return ''

 We can store keys as hash
 Each hash have set of timestamps
 Get access by timestamp directly
 All set timestamp increasing -> they are sorted already
 We can do binary search for exact or closest timestamp
 to improve acess directly, we can also create hashMap of timestamps, its increases space complexity

 O(log n), O(n)

 */

var TimeMap = function() {
  this.hash = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.hash[key]) {
    this.hash[key] = [];
  }

  this.hash[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!Array.isArray(this.hash[key])) {
    return '';
  }

  const vals = this.hash[key];

  let l = 0;
  let r = vals.length - 1;

  while(l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    const middle = vals[m];
    const [val, valTs] = middle;

    if (valTs === timestamp) {
      return val;
    } else if (timestamp < valTs){
      // go left
      r = m - 1;
    } else {
      // go right
      l = m + 1;
    }
  }
  const [val, ts] = vals[r] || vals[l];

  if (ts > timestamp) {
    return '';
  }

  return val;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
