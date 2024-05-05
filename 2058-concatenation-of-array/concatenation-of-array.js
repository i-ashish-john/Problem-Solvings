// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

//     var getConcatenation = function(nums) {
//     return [...nums,...nums]

// };

/**
 * @param {number[]} nums
  * @param {number[]} ans

 * @return {number[]}
 */
var getConcatenation = function(nums,ans) {
   let array=[];
     array =  nums.concat(nums);
     ans=array;
    return ans;
};