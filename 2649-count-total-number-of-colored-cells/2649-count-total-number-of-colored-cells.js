/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let val = 1

    for (let i = 0; i < n; i++) {
        val = val + 4 * i
  }

    return val
};