/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
 let first = nums1.sort((a,b)=>a-b)
 let second = nums2.sort((a,b)=>a-b)
//     let count = 0

//     for(let i = first[0];i< second[0];i++){
//         count++
//     }
//         return count;

//       for(let j = 0; j < nums1.length; j++){
//         if(nums2[j] !== nums1[j]){
//             return nums1[j] - nums2[j]
//         }
//     }

//      for(let i = 0; i < nums1.length; i++) {
//         if(nums2[i] !== nums1[i]) {
//             return nums2[i] - nums1[i];
//         }
//     }
//    return 0
return nums2[0]-nums1[0]
};
