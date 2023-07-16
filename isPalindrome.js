 /**
  * @Time 97 ms
  * @Memory 46.6 MB
  */
 var isPalindrome = function(s) {
    let words = s.replace(/[\W_]+/g, "").toLowerCase();
    const reversed = words.split("").reverse().join("");
    if(words === reversed || words === ""){
        return true
    }
    else return false;
};