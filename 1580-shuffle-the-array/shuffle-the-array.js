/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let first =[]
    let second=[]
    let main=[]
    for(let i =0;i<n;i++){
         first.push(nums[i])   
    }
    for(let j = n;j<nums.length;j++){
        second.push(nums[j])
    }
    for(let r = 0;r<first.length;r++){
         main.push(first[r])
         main.push(second[r])
    }
    return main
};