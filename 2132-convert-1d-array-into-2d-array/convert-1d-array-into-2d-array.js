/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    
    if(original.length != m*n){
        return []
    }

    let res = [], arr= []

    for(let val of original){
        arr.push(val)
        if(arr.length == n){
            res.push(arr)
            arr = []
        }
    }

    return res


};