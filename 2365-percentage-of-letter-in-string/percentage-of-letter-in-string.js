/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  let count = 0
  for(const c of s)
   if(c===letter){
   count++
   }
   console.log(count)

   const variable = Math.floor((count/s.length)*100)
   return variable
};