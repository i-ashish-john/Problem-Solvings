/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(String(num).length === 1) return num
    let number = String(num)
    let sum = 0
    while(number.length >=2){
        for(let i = 0; i<number.length;i++){
            sum += Number(number[i])
            console.log('sum is =',sum);
        }

        number = String(sum)
        sum = 0
    }
    return Number(number)
};  