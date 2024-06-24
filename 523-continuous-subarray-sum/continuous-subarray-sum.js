/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let mods = {};
    let sum = 0;
    mods[0] = -1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let mod = sum % k;
        if (mods[mod] === undefined) {
            mods[mod] = i;
        } else if (mods[mod] < i - 1) {
            return true;
        } 
    }
    return false;
};