/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    vall = []
    for(i=0;i<s.length;i++) {
        if(!isNaN(s[i])) {
            vall.pop()
        } else {
            vall.push(s[i])
        }
    }
    return vall.join('')
};