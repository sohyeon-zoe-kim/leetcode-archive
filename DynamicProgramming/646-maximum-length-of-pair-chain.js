// 한번 더 풀어보기
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => {
    return a[1] - b[1];
  });

  const dp = new Array(pairs.length).fill(1);

  for (let i = 1; i < pairs.length; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let maxLength = 0;
  for (let i = 0; i < dp.length; i++) {
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
};

const pairs = [
  [1, 2],
  [2, 3],
  [3, 4],
];

console.log(findLongestChain(pairs));
