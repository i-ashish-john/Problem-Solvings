/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t){

    // if (s.length !== t.length){
    //     return false;
    // }
    let Object1 = {}
    let Object2 = {}
    for(let i = 0; i < s.length; i++){
        let S = s[i];
        let T = t[i];

        if(!Object1[S] && !Object2[T]){
            Object1[S] = T;
            Object2[T] = S;
        }else if (Object1[S] !== T || Object2[T] !== S){
            return false;
        }
    }

    return true;
};