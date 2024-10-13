/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     let count=0 
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i]==k || nums[i]+nums[i+1]==k ){
//             count++
//         }
//     }
//     return count
// };
var subarraySum = function(nums, k) {
    let counter = 0;
    for (let i=0;i<nums.length;i++) {
        let base = 0;
        for (let j=i;j<nums.length;j++) {
            base+=nums[j];
            if (base == k) counter++;
        }
    }
    return counter;
};//but looking solution