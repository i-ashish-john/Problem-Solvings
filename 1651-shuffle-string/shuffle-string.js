/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str =[]
   for(let i =0;i<indices.length;i++){
        str[indices[i]] = s[i]
   }
//    console.log(str.join())
const word = str.join("")
  return word

};