/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    
    // If ch is not found, return the original word
    if (index === -1) {
        return word;
    }
    
    // Reverse the prefix and concatenate with the rest of the word
    return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
};