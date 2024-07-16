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
            res.push(word)
            word = ""
        }
    }
    if (word.length > 0) {
        res.push(word)
    }

    return res.reverse().join(' ')
};


// var reverseWords = function (s) {
//     s = s.split(' ');
//     let res = [];
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] != '') res.push(s[i]);
//     }
//     return res.join(' ');
// };