/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  if (arr.length === 1) {
    return [-1];
  }

  const result = [];
  let temp = arr.slice(1);

  while (result.length !== arr.length) {
    if (temp.length === 0) {
      result.push(-1);
      break;
    }
    const maxNum = Math.max(...temp);
    const maxNumIdx = temp.indexOf(maxNum);
    for (let i = 0; i < maxNumIdx + 1; i++) {
      result.push(maxNum);
    }
    temp = temp.slice(maxNumIdx + 1);
  }

  return result;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));
