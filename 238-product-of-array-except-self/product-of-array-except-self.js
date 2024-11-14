// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
    // let products =[]
    // for(let i =0;i<nums.length;i++){
    //     let sum =1
    //     for(let j =0;j<nums.length;j++){
    //         if(i !== j){
    //             sum*=nums[j]
    //         }
    //     }
    //     products.push(sum)
    // }
    // return products
    //<--cant submit this code because--->
    //<--because this will only checkk the prefix and suffix->
    
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    const res = [];

    let prefixProduct = 1;

    for(let i = 0; i < n; i++) {
        res[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    let suffixProduct = 1;

    for(let i = n - 1; i >= 0; i--) {        
        res[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return res;
};