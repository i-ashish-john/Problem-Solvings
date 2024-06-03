var appendCharacters = function (s, t) {
    let ln = t.length;
    let sss = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[sss]) {
            sss++;
            ln--;
        }
    }
    return ln;
};