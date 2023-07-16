 /**
  * @Time 70 ms
  * @Memory 44.2 MB
  */
 var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return "";
    }
    let global = strs[0].split('');
    let seco = [];
    strs.forEach(stri=>{
        let stopper = false;
        stri.split('').forEach((char,index)=>{
            if(!stopper){
                if(global[index]===char){
                    seco.push(char);
                }else{
                    stopper = true;
                }
            }
        })
            global = seco;
            seco = [];
        
    })
    return global.join('');
};