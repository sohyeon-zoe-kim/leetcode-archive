/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2.slice(0, n))
  nums1.sort((a, b) => a - b)
  return nums1
};

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
const m = 3
const n = 3
const test = merge(nums1, m, nums2, n)

console.log(test)