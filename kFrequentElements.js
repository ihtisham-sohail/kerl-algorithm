 /**
  * @Time 124 ms
  * @Memory 45 MB
  */
 var topKFrequent = function(nums, k) {
    let mar = {};
    let sortable = [];
    let caller = [];
    nums.forEach(car=>{
        if(mar[car]){
            mar[car]++;
        }else{
            mar[car] = 1;
        }
    })
   for (let vehicle in mar) {
    sortable.push([vehicle, mar[vehicle]]);
}

sortable.sort(function(a, b) {
    return b[1]-a[1];
});
    console.log(sortable);
    sortable.forEach(f=>{
        caller.push(parseInt(f[0]));
    })
    caller.length = k;
    return caller
};