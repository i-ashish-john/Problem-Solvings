/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freq = {};

    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        freq[element] = (freq[element] || 0) + 1;
    }

    nums.sort((a, b) => {
        if (freq[a] > freq[b]) {
            return 1;
        } else if (freq[a] === freq[b]) {
            if (a > b) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return -1;
        }
    });

    return nums;
};