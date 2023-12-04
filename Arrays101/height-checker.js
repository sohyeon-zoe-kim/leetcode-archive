/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const expected = [];
  for (let i = 0; i < heights.length; i++) {
    expected[i] = heights[i];
  }
  expected.sort((a, b) => a - b);

  const result = heights.filter((el, i) => expected[i] !== el);
  return result.length;
};

const heights = [
  10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
];
console.log(heightChecker(heights));
