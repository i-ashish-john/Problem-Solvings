/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let d = [...score].sort((a,b)=>b-a)
    let object = {}

    for(let i=0;i<d.length;i++){
        if(i === 0){
            object[d[i]] = "Gold Medal"
        }
        else if(i===1){
            object[d[i]] = "Silver Medal"
        }
        else if(i===2){
            object[d[i]] = "Bronze Medal"
        }
        else{
            object[d[i]] = (i+1).toString()
        }
    }
    return score.map(s=>object[s])
};