 /**
  * @Time 116 ms
  * @Memory 56 MB
  */
 var productExceptSelf = function(nums) {
    // Base case
   let arr = nums;
   let n = nums.length;
   let temp = 1;
   let temp2 = 1;

       /* Allocate memory for the product array */
       let prod = Array(n).fill(1);
       
   for (let i = 0; i < n; i++) {
       prod[i] *= temp;
       temp *= arr[i];
       
       // reversal
       const j = n-1-i;
           prod[j] *= temp2;
           temp2 *= arr[j];
      }
       return prod;
};