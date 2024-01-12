/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numToIdx = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIdx.has(complement)) {
      return [numToIdx.get(complement), i];
    }
    numToIdx.set(nums[i], i);
  }

  throw Error("No Solution");
};

const nums = [3, 3],
  target = 6;

console.log(twoSum(nums, target));
