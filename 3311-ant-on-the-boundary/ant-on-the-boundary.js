/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let boundary = 0;
    let pointer = 0

    nums.forEach((ele)=>{
         pointer += ele 
        pointer === 0 ? boundary++ : null
        
    })
return boundary
};