 /**
  * @Time 129 ms
  * @Memory 43.7 MB
  */
 var twoSum = function(numbers, target) {
    let acc = {};
    let stopper = true;
    let indices = [];
    while(numbers.length && stopper){
        let g = numbers.pop();
        if(acc[g] || acc[g]===0){
            indices.push(numbers.length+1);
            indices.push(acc[g]+1);
            stopper = false;
        }else{
        acc[target-g]=numbers.length;   
        }
    }
    return indices;
};