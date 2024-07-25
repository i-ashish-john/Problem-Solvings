/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    return words.filter(word => {
        let lowerWord = word.toLowerCase()

        if (allInOneRow(row1, lowerWord) || allInOneRow(row2, lowerWord) || allInOneRow(row3, lowerWord)) {
            return true
        }
        return false
    })

};


function allInOneRow(row, word) {
    for (let char of word) {
        if (!row.has(char)) {
            return false;
        }
    }
    return true;
}
