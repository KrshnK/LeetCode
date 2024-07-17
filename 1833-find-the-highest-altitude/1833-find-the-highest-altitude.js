/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let res = [0]

    for (let i = 0; i < gain.length; i++) {
        res.push(gain[i] + res[i])
    }
    return Math.max(...res)
};