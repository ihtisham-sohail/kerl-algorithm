 /**
  * @Time 134 ms
  * @Memory 45.6 MB
  */
 var twoSum = function(nums, target) {
    let acc = {};
    let stopper = true;
    let indices = [];
    while(nums.length && stopper){
        let g = nums.pop();
        if(acc[g] || acc[g]===0){
            indices.push(acc[g]);
            indices.push(nums.length);
            stopper = false;
        }else{
        acc[target-g]=nums.length;   
        }
    }
    return indices;
};

 // BEST TIME AND MEMORY
 /**
  * @Time 80 ms
  * @Memory 42.9 MB
  */
var twoSum = function(nums, target) {
    if(nums.length>10000 || nums.length<2){
        return [];
    }
    const f={};
    let charlie = [];
    let call = 0;
    while(call>=0 && call<nums.length){
        if(f && f[nums[call]]>=0){
            charlie.push(f[nums[call]]);
            charlie.push(call);
            call = -1;
        }
        if(nums.length>20 && f && f[nums[nums.length-1-call]]>=0){
            charlie.push(f[nums[nums.length-1-call]]);
            charlie.push(nums.length-1-call);
            call = -1;
        }
        if(call>=0){
        f[target-nums[call]]=call;
        if(nums.length>20){
            f[target-nums[nums.length-1-call]]=nums.length-1-call;
        }
            
            call++;
        }
    }
    return charlie;
};