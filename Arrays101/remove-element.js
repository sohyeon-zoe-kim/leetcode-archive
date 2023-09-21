/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1)
  }

  return nums.length
};

const nums = [3,2,2,3]
const val = 3
const test = removeElement(nums, val)

console.log(test)
console.log(nums)