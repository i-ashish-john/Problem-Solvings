/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) {
        // Negative numbers are not palindromes
        return false;
    }

    const originalString = String(x);
    const reversedString = originalString.split('').reverse().join('');

    return originalString === reversedString;
};