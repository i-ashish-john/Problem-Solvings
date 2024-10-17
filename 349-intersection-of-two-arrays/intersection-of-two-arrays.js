/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   let larget;
   let smaller;
   let Arr =[]
   if(nums1.length > nums2.length){
        larger = nums1
        smaller = nums2
   }else{
        larger = nums2
        smaller = nums1
   }
    for(let j = 0;j< larger.length;j++){
        if(larger[j] == smaller[j] || smaller.includes(larger[j]) ){

         if(Arr.includes(larger[j])){
              continue
         }else{
            Arr.push(larger[j])
         }    

     }
     
    }
    return Arr
};