/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim().split(" ")
    let val = str[str.length-1]
    return val.length
};