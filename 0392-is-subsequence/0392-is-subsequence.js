/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let index = 0
        for (let j = 0 ; j < t.length; j++) {
            if (s[index] == t[j]) index++
        }

    return (index == s.length)
};