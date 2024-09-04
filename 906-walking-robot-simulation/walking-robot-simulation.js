var robotSim = function(commands, obstacles) {
    let i = 0;
    let j = 0;
    let total = 0;
    let max = 0;
    const set = new Set();
    for (let [a, b] of obstacles) {
        set.add(`${a}-${b}`);
    }
    const dirs = {
        '1': () => { // north
            if (!set.has(`${i}-${j + 1}`)) {
                j++;
                total++;
            }
        },
        '2': () => { // east
            if (!set.has(`${i + 1}-${j}`)) {
                i++;
                total++;
            }
        },
        '3': () => { // south
            if (!set.has(`${i}-${j - 1}`)) {
                j--;
                total++;
            }
        },
        '4': () => { // west
            if (!set.has(`${i - 1}-${j}`)) {
                i--;
                total++;
            }
        },
    }
    let dir = '1';
    for (let c of commands) {
        if (c === -1) {
            dir = +dir
            dir++;
            if (dir === 5) dir = 1;
            dir = dir.toString();
        } else if (c === -2) {
            dir = +dir
            dir--;
            if (dir === 0) dir = 4;
            dir = dir.toString();
        } else {
            while (c--) {
                dirs[dir]();
                max = Math.max(max, Math.pow(i, 2) + Math.pow(j, 2))
            }
        }
    }
    return max;
};