/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let div = 0
    if (n < 2) return false

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            div++
        }
    }

    return div == 3 ? true : false
};