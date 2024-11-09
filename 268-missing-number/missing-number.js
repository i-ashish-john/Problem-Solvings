/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums){

    for(let i =0;i<=nums.length;i++){
        if(!nums.includes(i)){
             return i
        }
    }
    // for(let i = 0;i<longest;i++){
    //     for(let j = 0;j<=nums.length-1;j++){
    //         if( nums[i].includes(nums[j]) ){
    //              return i
    //         }
    //     }
    // }

};