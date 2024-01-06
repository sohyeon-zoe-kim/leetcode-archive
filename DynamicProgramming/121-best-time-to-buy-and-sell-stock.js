/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let maximumProfit = 0;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      profit = prices[sell] - prices[buy];
      maximumProfit = Math.max(maximumProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }

  return maximumProfit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
