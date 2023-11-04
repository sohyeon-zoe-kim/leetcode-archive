/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  let result = false
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] === arr[j] * 2) && i != j) {
        result = true
      }
    }
  }

  return result
};

const arr = [-2, 0, 10, -19, 4, 6, -8]
const test = checkIfExist(arr)

console.log(test)