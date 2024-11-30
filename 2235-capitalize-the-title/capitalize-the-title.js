/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
   const str= title.toLowerCase().split(" ")
   console.log(str)
for(let i=0;i<str.length;i++){
   if(str[i].length > 2){

       str[i]=str[i][0].toUpperCase()+str[i].slice(1)
   }
   
    
};
   console.log(str)

return str.join(" ")
}