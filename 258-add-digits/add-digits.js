/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    str = num.toString()
    let n
    while (true) {
        n = 0
        for (let i = 0; i < str.length; i++) {
            n += Number(str[i])
        }
        if (n <= 9) {
            return n
        }
        str = n.toString()
    }
};