/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const sortedSquares = nums => {
//   const result = nums
//     .map(num => {
//       return num * num
//     })
//     .sort((a, b) => {
//       return a - b
//     })

//   return result
// }

/** solve in O(N) time and O(N) space */
const sortedSquares = (nums) => {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }

  return result;
};

const example = [-4, -1, 0, 3, 10];

const test = sortedSquares(example);

console.log(test);
