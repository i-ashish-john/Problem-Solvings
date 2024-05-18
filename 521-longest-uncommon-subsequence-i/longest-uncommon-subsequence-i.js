/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
//    const first=[];
//    const second=[];
    let join;
//   const [first]=a
//   const [second]=b 
//   console.log('A and B =',a,b)
console.log('hello')
  join = a.concat(b)
console.log('join',join)
if(a==b){
    return -1
}
if(a.length && b.length){
    if(a.length<b.length){
        return b.length
    }
    return a.length
}else{
    return -1
}

};