/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const mymap = new Map()
  arr.forEach((element)=>{
    mymap.set(element,(mymap.has(element)?mymap.get(element)+1:1))
  })
  
let largestLucky = -1
 for(let [key,val] of mymap){
     if(key == val){
        largestLucky = Math.max(largestLucky,key)
     }
 }
 return largestLucky

 }

