/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
   let s  = sentence.split(' ')
     for(let i =0;i<s.length;i++){
            if(s[i].startsWith(searchWord)){
                return i+1
            }
           
     }
 return -1
};