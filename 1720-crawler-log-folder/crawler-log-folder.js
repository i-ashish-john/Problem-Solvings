/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0
    for(let log of logs){
        if(log[0] === '.' && log[1] === '.'){
            depth !== 0 ? depth-- : depth; 
        }else if(log[1] === '/'){
            if(log[0] !== '.') depth++
        }else{
            depth++
        }
    }
    return depth
};