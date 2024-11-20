/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1 = word1.split("")
     let w2 = word2.split("")
let  result = []
let w3 = w1.length-1+w2.length-1
for(let i =0;i<=w3;i++){
    if(w1[i]){
      result.push(w1[i])
    }
    if(w2[i]){
        result.push(w2[i])
    }
}
   return result.join("")
};

