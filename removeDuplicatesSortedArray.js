 /**
  * @Time 116 ms
  * @Memory 44.6 MB
  */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let pos1=1;
    let pos2=1;
    while(pos2<nums.length){
        if(nums[pos2-1]!==nums[pos2]){
            nums[pos1]=nums[pos2];
            pos1++;
        }
        pos2++;
    }
    return pos1;
};