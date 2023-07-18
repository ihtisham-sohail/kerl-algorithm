// My old solution

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     let hash = {};
//     if(s.length===1 || numRows===1 || s.length<=numRows){
//         return s;
//     }
//     let isNeg = false;
//     let cons = numRows === 3 ? numRows+1 : numRows+2;
//     let i = 0;
//     for(let d = 0 ; d < s.length ; d++){

//         if(hash[i] && hash[i].length){
//             hash[i].push(s[d]);
//         }else{
//             hash[i]=[s[d]];
//         }
//         if(isNeg){
//             i--;
//         }else{
//         i++;
//         }
//         if(i===numRows && !isNeg){
//             isNeg = true;
//             i = i-2;
//         }else if(i<0 && isNeg){
//             isNeg = false;
//             i = i+2;
//         }
        
//     }

//         let final = '';
//         for(let j = 0 ; j < numRows ; j++){
//             final = final + hash[j].join("");
//         }
//     return final;
// };

 /**
  * @Time 79 ms
  * @Memory 46.37 MB
  */

// better solutions , understood it but couldn't figure out the 
// the iteration sequence
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // if numRows = 1, the string does not need to be transformed
    if (numRows == 1) return s;

    // initialize the variables
    let sol = '';
    const inc = [2*(numRows -1), 0];

    // loop by row and pick up the character from the string
    for (let i=0; i<numRows; i++) {
        let idx = i;
        let counter = 0;
        while (idx < s.length) {
            sol += s[idx];
            (inc[counter % 2]) ? idx += inc[counter % 2] : idx += (inc[0] + inc[1]);
            counter ++;
        }
        inc[0] -= 2;
        inc[1] += 2;
    }
    return sol;
};