var checkRecord = function(s) {
   let count = 0;
    let cons = 0;
    
    for(let i=0; i< s.length; i++){
        if(s[i] ==="A"){
            count++;
            cons =0;
        }
        
        if(count > 1) return false
        if(s[i] ==="L"){
            cons++;
        }else{
           cons =0; 
        }
        if(cons > 2)return false
    }
    return true;
};   