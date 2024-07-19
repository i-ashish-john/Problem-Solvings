/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
   for(let i=0;i<matrix.length;i++){
       let arrayelem=matrix[i]
       let minrow=Math.min(...arrayelem)
        let index=arrayelem.indexOf(minrow)
        if(matrix.every(elem=> elem[index]<=minrow)) return [minrow] 
   }
   return []

};