/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let temp=0
    s=1
 for(let i=1;i<=time;i++){
       if(temp===0){
        s++
       }else{
        s--
       }


    if(s==n){
        temp=1
       }
    if(s==1){
        temp=0
       }
     }

return s
 };