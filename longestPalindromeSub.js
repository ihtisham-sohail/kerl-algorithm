 /**
  * @Time 148 ms
  * @Memory 52.07 MB
  */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let longest = '';
    let temp = '';
    for(let i = 0 ; i<len ; i++){
        if(s[i+1]===s[i]){
            let j = 1;
            temp = s[i]+s[i+1];
            while(i-j >= 0 && i+1+j < len && s[i-j]===s[i+1+j]){
                temp = s[i-j] + temp + s[i+1+j] ;
                j++;
            }

        }
        if(temp.length > longest.length){
            longest = temp;
        }
        temp = '';
        if(s[i-1]===s[i+1]){
            let j = 1;
            temp = s[i];
            while(i+j<len && i-j>=0 && s[i+j]===s[i-j]){
                temp = s[i-j] + temp + s[i+j];
                j++;
            }
        }
        if(temp.length > longest.length){
            longest = temp;
        }
        temp = '';
    }
    if(longest === ''){
        longest = s[0];        
    }
    return longest;
};