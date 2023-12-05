/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let order = 1;
  let prevNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (prevNum !== nums[i]) {
      order++;
      prevNum = nums[i];
    }

    if (order === 3) {
      return nums[i];
    }
  }

  return nums[0];
};
//4, 3, 2, 2, 2, 1
const nums = [2, 2, 3, 1];
console.log(thirdMax(nums));
