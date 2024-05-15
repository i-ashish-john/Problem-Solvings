 /**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            console.log('igits',digits);
            digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }
    }
    
    digits.unshift(1);//in here i added a one in front after the excution of the if condition 
    
    return digits;
};
        // digits.length[i]+1;
    //    console.log( 'fdwrf',digits.length[i]+1);
        // let value=digits.length+1
        // digits.push(value)
        // console.log("EL",digits);
        // digits.length[i]+=1