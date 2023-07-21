 /**
  * @Time 92 ms
  * @Memory 59.12 MB
  */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let breaker = true;
    let found = false;
    const hasher = new Map();
    for(let i = 0 ; i<nums.length && breaker ; ){
        if(hasher.get(nums[i])){
            found = true;
            breaker = false;
        }else{
            hasher.set(nums[i],true);
        }
    }   
    return found;
};