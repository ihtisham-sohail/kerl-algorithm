 /**
  * @Time 180 ms
  * @Memory 62.3 MB
  */
 var longestConsecutive = function(nums) {
    nums = nums.filter(num => num != 999999999 && num != -1000000000 && num != 1000000000)
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let set = new Set(nums);
    let result = 0;
    
    let cur = 0;
    for(let i = min; i <= max; i++) {
        if(set.has(i)) {
            cur++;
            if(cur > result) {
                result = cur;
            }
        } else {
            cur = 0;
        }
    }
    
    return result;
    
};