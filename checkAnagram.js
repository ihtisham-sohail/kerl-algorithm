 /**
  * @Time 76 ms
  * @Memory 42.01 MB
  */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const hasher = new Map();

    for(let i = 0; i<s.length ; i++){
        const a = s[i];
        const b = t[i];

        if(hasher.get(a)){
            hasher.set(a,hasher.get(a)+1);
        }else{
            hasher.set(a,1);
        }
        if(hasher.get(b)){
            hasher.set(b,hasher.get(b)-1);
        }else{
            hasher.set(b,-1);
        }
    }
    let zero = true;
    for (let [key, value] of hasher) {
if(value!==0){
    zero = false;
    break;
}
}
return zero;
};