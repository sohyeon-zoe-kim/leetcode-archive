/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const arr = [[1]]
  return generateRow(arr, numRows, 1)
};

const generateRow = (arr, targetRow, curRow) => {
  if (curRow === targetRow) {
    return arr
  }

  const rowArr = [1]
  let prev = 1
  for (let i = 1; i <= curRow; i++) {
    const nextVal = prev * (curRow - i + 1) / i
    rowArr.push(nextVal)
    prev = nextVal
  }
  arr.push(rowArr)

  return generateRow(arr, targetRow, curRow + 1)
}

const numRows = 5
const result = generate(numRows)
console.log(result)
