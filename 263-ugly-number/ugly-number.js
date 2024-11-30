/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<=0) return false
    let factors =[2,3,5]
     
    for(let factor of factors ){
           while( n % factor ==0 ){
                 n/=factor
           }
    }
    return n == 1
};













 