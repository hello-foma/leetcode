/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const nums1Hash = nums1.reduce((obj, num) => {
    obj[num] = typeof obj[num] === 'number' ? ++obj[num] : 1;

    return obj;
  }, {});

  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    const isExist = nums1Hash[nums2[i]] > 0;

    if (isExist) {
      result.push(nums2[i]);
      nums1Hash[nums2[i]]--;
    }
  }
  return result;
};
