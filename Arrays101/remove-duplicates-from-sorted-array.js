/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const result = [...new Set(nums)]
  nums.splice(0, nums.length, ...new Set(nums))
  return result.length
};

const nums = [0,0,1,1,1,2,2,3,3,4]
const test = removeDuplicates(nums)

console.log(test)
console.log(nums)