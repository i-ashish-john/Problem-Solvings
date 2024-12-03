/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
     let str = s.split('')
     let result = []
     let count  =0
     for(let i =0;i<str.length;i++){
     if (count < spaces.length && spaces[count] === i) {
        result.push(' ');  
        count++;  
     }
    result.push(str[i]); 
     }
     return result.join('')
};