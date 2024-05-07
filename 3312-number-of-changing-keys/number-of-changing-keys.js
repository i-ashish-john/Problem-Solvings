/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let changeOfKey=0;
   const newStr= s.toLowerCase();
   let prev =newStr[0]
   for(let i=1;i<newStr.length;i++){
       if(prev!==newStr[i]){
           changeOfKey++
       }
       prev=newStr[i]
   }
    return changeOfKey
};