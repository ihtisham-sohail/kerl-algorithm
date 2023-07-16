 /**
  * @Time 131 ms
  * @Memory 49.8 MB
  */
 var maxArea = function(height) {
    let first=0;
let last = height.length-1;
let area=0
while(first<last){

    let a= height[first]>height[last]?height[last]:height[first];
    area = Math.max(a*(last-first),area);
     height[first]<height[last]?first++:last--;
    
}
return area
};