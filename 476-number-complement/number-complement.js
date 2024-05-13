/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
 let value = num.toString(2).split("");
 let i=0;
 while(i<value.length){
    if(value[i]=="1") value[i]=0
    else value[i]=1
    i++
 }
 return parseInt(value.join(""),2)
};