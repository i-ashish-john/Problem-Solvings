/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let store=[];
    for(let i=0;i<mountain.length-1;i++){
        if(mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1]){
                store.push(i)
        }
       
    }
     return store
};