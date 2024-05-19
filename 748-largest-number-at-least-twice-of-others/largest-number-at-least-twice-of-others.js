/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const nums2 = [...nums]
    let largestNumberArray = nums.sort((a,b)=>b-a)
    let largestNumber = largestNumberArray[0]
    
    
    for(let i = 1 ; i < largestNumberArray.length ; i++){
        let doublevalue = nums[i] * 2
        if(doublevalue>largestNumber){
            console.log("largest found")
            return -1
        }else{
            console.log(nums2.indexOf(largestNumber));
        }
    }
    
    return nums2.indexOf(largestNumber)
};