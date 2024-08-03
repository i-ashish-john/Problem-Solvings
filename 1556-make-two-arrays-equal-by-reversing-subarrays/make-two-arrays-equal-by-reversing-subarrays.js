var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) {
        return false;
    }
    
    const sortedTarget = target.sort((a, b) => a - b);
    const sortedArr = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedTarget.length; i++) {
        if (sortedTarget[i] !== sortedArr[i]) {
            return false;
        }
    }
    
    return true;
};