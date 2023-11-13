/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const arr = [1]
  let prev = 1
  for (let i = 1; i <= rowIndex; i++) {
    const nextVal = prev * (rowIndex - i + 1) / i
    arr.push(nextVal)
    prev = nextVal
  }

  return arr
};

const result = getRow(3)

console.log('result : ', result)
