/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let temp=0;
    set=1
 for(let i=1;i<=time;i++){
       if(temp===0){
        set++
       }else{
        set--
       }


    if(set==n){
        temp=1
       }
    if(set==1){
        temp=0
       }
     }

return set
 };