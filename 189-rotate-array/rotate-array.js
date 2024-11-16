/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {    
    let n = nums.length
    let numsCopy = [...nums];
    console.log(numsCopy)
    for (let i = 0; i < n; i++) {
	nums[(i+k)%n] = numsCopy[i]
    }
    console.log(`nums=${nums}`)    
    console.log(`numsCopy=${numsCopy}`)
};
// var rotate = function(nums, k) {
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
// };