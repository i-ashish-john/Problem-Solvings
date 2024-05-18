/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let unique = new Set();
    console.log('unique',unique);
    const limit = candyType.length;
    for(let i = 0;i<limit;i++){
        unique.add(candyType[i]);
    }
    return Math.min(unique.size,limit/2);
};

