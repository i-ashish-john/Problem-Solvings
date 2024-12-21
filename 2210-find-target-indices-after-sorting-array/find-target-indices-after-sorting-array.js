/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b)
    // console.log(nums)
    let val = []
    for(let i =0;i<nums.length;i++){
        if(nums[i] === target){
             val.push(i)
        }
        
    }
    
    return val
};






