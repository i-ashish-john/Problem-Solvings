/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b)=>b-a)
  
    let end = salary.indexOf(salary.length-1)
    salary.splice(0,1)
    salary.splice(end,1)
     let l = salary.length
    if(salary.length > 1){
        let sum = salary.reduce((acc,num)=>{
            return acc+num
        },0)
        console.log(sum)
        return sum/l
        
    }
         return salary[0]

};