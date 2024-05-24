/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    let number;

    for(let i=0;i<nums.length;i++){
        // if(nums[i].length <=1|| nums[i] % 2 !== 0){
        //     return 0
        // }else if (nums[i] % 2==0){
        //     count++
        // }
        number = nums[i].toString().length
        if(number % 2 == 0){
            count = count+1
        }
    }

    return count;
};