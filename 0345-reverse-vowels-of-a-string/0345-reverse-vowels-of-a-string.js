/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowel = "aeiouAEIOU"
    const char = s.split('')

    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (left < right && vowel.indexOf(char[left]) == -1) {
            left++
        }
        while (left < right && vowel.indexOf(char[right]) == -1) {
            right--
        }
        // swap
        if (left < right) {
            [char[left], char[right]] = [char[right], char[left]]
            left++
            right--
        }
    }
    return char.join('')
};