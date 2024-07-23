/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let res = []
    let sum = BigInt(num.join('')) + BigInt(k)
    sum = sum.toString()
    for(const char of sum){
        res.push(char)
    }
    return res
};