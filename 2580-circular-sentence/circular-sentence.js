/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {

let word = sentence.split(" ")
for(let i = 0;i<word.length;i++){
  let lastChar =  word[i][word[i].length-1]
  let nextWord = word[(i + 1) % word.length]
  let firstOfNext  = nextWord[0]
    if( lastChar !== firstOfNext){
        return false
    }
}
 return true


}


