/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
    const length = arr.length
    const result = []
    for(let i=0; i<length; i++) {
      if (arr[i] === 0) {
        result.push(0)
        result.push(0)
      } else {
        result.push(arr[i])
      }
    }

    arr.splice(0,arr.length, ...result.slice(0, length))
    
    return arr
};

const arr = [1,2,3,0,0,3,6,2]
const result = duplicateZeros(arr)

console.log(result)