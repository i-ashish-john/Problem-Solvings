/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let pre = [0];
    let count = 0;
    for (let i=1; i<nums.length; i++) {
        if (nums[i-1]%2 == nums[i]%2) {
            count++;
        } 
        pre.push(count);
    }
    let res = [];
    for (let que of queries) {
        if (pre[que[1]] - pre[que[0]] == 0) res.push(true);
        else res.push(false);
    }
    return res;
};