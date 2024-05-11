var isHappy = function(n) {
    let number = n.toString()
    
    let seen = new Set();
    
    while(!seen.has(number)){
        let result = 0;

        for(let i = 0; i < number.length; i++){
            result += Math.pow(parseInt(number[i]), 2)
        }

        if(result == 1) return true
            
        seen.add(number)
        
        number = result.toString();
    }

    return false;
};