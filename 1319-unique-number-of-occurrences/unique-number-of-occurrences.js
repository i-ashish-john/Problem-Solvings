/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    let x=0;
    let res = new Array();
    for(let i=0; i<arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], x);
            res[x] = 1;
            x++;
        } else {
            res[map.get(arr[i])] +=1;
        }
    }
    let check = [];
    check.splice(0, 0, ...new Set(res));
    console.log(res);
    console.log(check);
    return check.join('') == res.join('');
};