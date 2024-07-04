/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let res = []
    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i])
        }
    }
    return res

};