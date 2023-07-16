 /**
  * @Time 285 ms
  * @Memory 54 MB
  */
 var groupAnagrams = function(strs) {
    let d = [];
    let f = {};
    strs.forEach((st,index)=>{
            const breaker = st.split('');
            breaker.sort();
            const g = breaker.join();
            if(f[g] && f[g].length){
                f[g].push(st);
            }else{
                f[g]=[st];
            }
    });
    Object.values(f).forEach(val=>{
        d.push(val);
    });
    console.log(d);
        return d;         
};