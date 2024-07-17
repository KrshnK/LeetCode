/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowel = new Set('aeiouAEIOU')
    let count = 0

    // intial window
    for (let i = 0; i < k; i++) {
        if (vowel.has(s[i])) count++
    }

    let maxCount = count

    // slide window
    for (let i = k; i < s.length; i++) {
        if (vowel.has(s[i])) count++
        if (vowel.has(s[i - k])) count--

        maxCount = Math.max(count, maxCount)
    }

    return maxCount
};