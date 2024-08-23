/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0
    while(n > 0){
        // for(let i = 0;i<n;i++){
            let num1 = n % k;
            let num2 = Math.floor(n / k)
            // Math.floor(num1,'heelo',num2)
            sum += num1
            n = num2
        // }
     }
     return sum
};