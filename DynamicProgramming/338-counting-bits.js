/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    const binary1Count = i.toString(2).match(/1/g);
    if (binary1Count) {
      ans[i] = binary1Count.length;
    } else {
      ans[i] = 0;
    }
  }

  return ans;
};

const n = 5;
console.log(countBits(n));
