/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    if (str2 == 0) return str1
    const res =  gcdOfStrings(str2, str1.slice(0, str1.length % str2.length))

    return res
};