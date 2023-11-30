/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort((a, b) => {
    if (b === 0) return -1;
  });
};

const nums = [2, 1];
moveZeroes(nums);
