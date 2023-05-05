/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let maximumCnt = 0
  let currentCnt = 0

  nums.forEach(el => {
    if (el === 1) {
      currentCnt += 1
      return
    }
    maximumCnt = maximumCnt < currentCnt ? currentCnt : maximumCnt
    currentCnt = 0
  })

  maximumCnt = maximumCnt < currentCnt ? currentCnt : maximumCnt

  return maximumCnt
}

const test = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])

console.log(test) // 3
