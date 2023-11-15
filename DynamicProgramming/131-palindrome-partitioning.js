/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const isPalindrome = (str) => str === str.split('').reverse().join('')
  const path = []
  const result = []
  solve()
  return result

  function solve(idx = 0) {
    if (idx === s.length) {
      result.push([...path])
      return
    }

    for (let i = idx + 1; i <= s.length; i++) {
      const str = s.substring(idx, i)
      if (isPalindrome(str)) {
        path.push(str)
        solve(i)
        path.pop()
      }
    }
  }
};

const test = 'aaba'
const result = partition(test)
console.log('result : ', result)