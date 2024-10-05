/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let set = [...new Set(arr)];
    let sortedArr = set.sort((a, b) => a - b);

    let map = new Map();
    let rank = 1;
    for (const elm of sortedArr) {
        map.set(elm, rank);
        rank++;
        // if (map.has(elm)) {
        //     map.set(elm, map.get(elm) + 1);
        // } else {
        //     map.set(elm, 1);
        // }
    }
    // console.log(map);
    let ans = []
    for (const elm of arr) {
        let val = map.get(elm);
        ans.push(val)
    }
    // console.log(ans);
    return ans;
};