/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count1 = 0;
    let max_count = 0
    for(let i=0 ;i< nums.length ; i++){
        if(nums[i]==1){
            count1++
        }else{
            count1 = 0
        }
        max_count = Math.max(count1,max_count)
    }
    return max_count
};