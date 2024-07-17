/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = []
    const len = s.length
    let word = ""

    for (i = 0; i < len; i++) {
        if (s[i] !== ' ') {
            word += s[i]
        } else if (word.length > 0) {
            res.push(word.split('').reverse().join(''))
            word = ""
        }
    }
    if (word.length > 0) {
        res.push(word.split('').reverse().join(''))
    }

    return res.join(' ')
};
