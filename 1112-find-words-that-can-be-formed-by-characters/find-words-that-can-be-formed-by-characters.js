/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    var mp = new Map()
    var res=0
    for(let x of chars){
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }
        else{
            mp.set(x,1)
        }
    }
    //console.log('mp=',mp)
    var checker = function(str){
        let flag=0
        var mp1=new Map()
        for(let x of str){
            if(mp1.has(x)){
                mp1.set(x,mp1.get(x)+1)
            }
            else{
                mp1.set(x,1)
            }
        }
        //console.log('str=',str,'mp1=',mp1)
        for(let [key,val]of mp1){
            //console.log('key val=',key,val,mp.get(key))
            if(mp.get(key)<val || !mp.has(key)){
                //console.log('disc found',key,val)
                flag=1
                break
            }
        }
        if(flag==0){
            res+=str.length
            //console.log('res=',res)
        }
    }
    for(let x of words){
        checker(x)
    }
    return res
};