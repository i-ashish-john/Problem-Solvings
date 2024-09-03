/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = "";
    for(let i=0; i<s.length; i++) {
        str += s.charCodeAt(i)-96;
    }
    let sum = 0;
    for(let i=0; i<k; i++) {
        sum = 0;
        for(let x=0; x<str.length; x++) {
            sum += parseInt(str[x]);
        }
        str = sum.toString();
    }
    return sum;
};