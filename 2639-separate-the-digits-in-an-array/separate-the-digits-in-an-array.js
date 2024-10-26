/**
 * @param {number[]} nums
 * @return {number[]}
 */

var separateDigits = function(nums) {
     let result =[]
  for(let i =0;i<nums.length;i++){
        let Str = String(nums[i])
        for(let j=0;j< Str.length;j++){
            result.push(Number(Str[j]))
        }
  }
  return result
    
};