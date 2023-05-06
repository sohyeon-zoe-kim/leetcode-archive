/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => {
  const result = nums
    .map(num => {
      return num * num
    })
    .sort((a, b) => {
      return a - b
    })

  return result
}
const example = [-7, -3, 2, 3, 11]
const test = sortedSquares(example)

console.log(test)
