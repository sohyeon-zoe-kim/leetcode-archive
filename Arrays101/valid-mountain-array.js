/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = arr => {
  if (arr.length < 3) return false
  let status = 'acc'
  let prev = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (status === 'acc') {
      if (prev < arr[i]) {
        prev = arr[i]
      } else if (prev > arr[i] && i !== 1) {
        prev = arr[i]
        status = 'desc'
      } else {
        return false
      }
    } else {
      if (prev > arr[i]) {
        prev = arr[i]
      } else {
        return false
      }
    }

  }

  if (status === 'desc') return true

  return false
};

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const result = validMountainArray(arr)
console.log(result)