/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const steps = [1, 1];
  if (steps < 2) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
};

const n = 3;
console.log(climbStairs(n));
