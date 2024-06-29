/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.includes(target)) {
        return -1
    } else {
        return nums.indexOf(target)
    }
};