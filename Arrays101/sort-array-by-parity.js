/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  nums.sort((a, b) => {
    if (a % 2 === 0) return -1;
  });
  return nums;
};

const nums = [3, 1, 2, 4, 9, 10, 11, 12, 13, 14, 15];
console.log(sortArrayByParity(nums));
