/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().replace(/ +/g, ' ').split(' ')
    let result =[]
    let finalResult =[]

   for(let word of s){
    result.push(word)
   }
   for(let i =result.length-1;i>=0;i--){
       finalResult.push(result[i])
   
   }
       console.log(finalResult)

 return finalResult.join(" ")
 
};