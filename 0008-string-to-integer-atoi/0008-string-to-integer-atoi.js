/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    atoi = parseInt(s)
    if ( atoi < -(2**31) ) return -2147483648
    if ( atoi > (2**31 - 1) ) return 2147483647
    return (isNaN(atoi) ? 0 : atoi)
};