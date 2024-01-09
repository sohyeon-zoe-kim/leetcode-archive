/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;

  for (let i = 2; i < n; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
  }

  return Math.min(cost[n - 1], cost[n - 2]);
};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
