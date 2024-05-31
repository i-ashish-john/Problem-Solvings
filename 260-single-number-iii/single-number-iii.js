var singleNumber = function(nums) {
    const ooo = {}
    for (let i = 0; i < nums.length; i++) {
        if (ooo[nums[i]]) {
            delete ooo[nums[i]]
        } else {
            ooo[nums[i]] = 1
        }
    }
    return Object.keys(ooo)
};