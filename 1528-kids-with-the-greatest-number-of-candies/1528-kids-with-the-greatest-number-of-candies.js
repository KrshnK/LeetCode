/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let result = []
    for (let i = 0; i < candies.length; i++) {
        let add;
        add = candies[i] + extraCandies
        if (add >= Math.max(...candies)) {
            result[i] = true
        } else {
            result[i] = false
        }
    }

    return result
};