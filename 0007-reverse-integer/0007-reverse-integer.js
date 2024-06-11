/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let sign = Math.sign(x);
    let num = Math.abs(x);

    while (num > 0) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    rev *= sign;
    
    // Correctly checking the 32-bit signed integer range after reversing
    if (rev < -(2**31) || rev > (2**31 - 1)) {
        return 0;
    }

    return rev;
};
