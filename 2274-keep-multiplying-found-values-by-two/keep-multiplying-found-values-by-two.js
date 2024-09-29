/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums=nums.sort((a,b)=>a-b)
        let value = original
    for(let i =0 ;i<nums.length ;i++){
         if(nums[i] == value){
            value  = value*2
         }
    }
  return value 
};