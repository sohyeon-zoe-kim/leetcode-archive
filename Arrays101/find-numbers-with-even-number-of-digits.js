/**
 * @param {number[]} nums
 * @return {number}
 */
const countEvenNumberOfDigits = nums => {
  const result = nums.reduce((acc, num) => {
    let quotient = -1
    let multiples = 0

    while (quotient !== 0) {
      multiples += 1
      quotient = Math.floor(num / 10 ** multiples)
    }

    return multiples % 2 === 0 ? acc + 1 : acc
  }, 0)

  return result
}

const example = [5, 1, 4824, 100000]
const test = countEvenNumberOfDigits(example)
console.log(test)
