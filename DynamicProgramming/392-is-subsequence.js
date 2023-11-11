/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  for (let i = 0; i < s.length; i++) {
    const idx = t.indexOf(s[i])
    if (idx === -1) return false
    t = t.substring(idx + 1)
  }

  return true
};

const s = "aaaaaa", t = "bbaaaa"

const result = isSubsequence(s, t)
console.log(result)