// /**
//  * @param {string} s
//  * @return {string}
//  */
// var maximumOddBinaryNumber = function(s) {
//     // let newS =s.split(" ");
//     // console.log(newS);
//     let Arr=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i]==0){
//              Arr=s[i];
//               console.log("rty:",s[i]);
//         }else if(s[i]==1){
//             Arr=s[i].push(1);
           
//         }
//         s=Arr
//     }
//     return s;

// };
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let n = s.length;
    let sorted = s.split('').sort((a,b) => b - a)
    for(let i = sorted.length - 1; i >= 0; i--){
        if(sorted[i] === '1'){
 [sorted[i], sorted[sorted.length-1]] = [sorted[sorted.length - 1], sorted[i]]
        }
    }
    return sorted.join('')
}