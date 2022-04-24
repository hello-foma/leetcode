/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let k = m-1;
  let l = n-1;
  for(let i = m+n-1; i>=0, l>=0; i--) {
    const a = nums1[k];
    const b = nums2[l];

    if (a >= b) {
      nums1[i] = a;
      k--;
    } else {
      nums1[i] = b;
      l--;
    }
  }
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
