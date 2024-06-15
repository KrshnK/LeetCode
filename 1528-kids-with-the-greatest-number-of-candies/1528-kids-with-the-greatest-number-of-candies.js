/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let result = []
    maxCand = Math.max(...candies)

    for (let i = 0; i < candies.length; i++) {
        let add;
        add = candies[i] + extraCandies
        if (add >= maxCand) {
            result[i] = true
        } else {
            result[i] = false
        }
    }

    return result
};