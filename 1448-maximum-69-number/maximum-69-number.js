/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let nums = num.toString();
    const numsArray = nums.split('');
    for(let i=0; i<nums.length; i++){
        if(nums[i]==6){
            numsArray[i] = '9';
            break;
        }
    }
    nums = numsArray.join('');
    return parseInt(nums);
};