 /**
  * @Time 111 ms
  * @Memory 46.90 MB
  */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0
    let len1 = nums1.length;
    let len2 = nums2.length;
    const final = [];

    while(i<nums1.length || j<nums2.length){
        const first = i < len1 ? nums1[i] : null;
        const second = j < len2 ? nums2[j] : null;

switch(true){
    case first===null:
            final.push(second);
            j++;
    break;
    case second===null:
            final.push(first);
            i++;
    break;
    case first<=second:
            final.push(first);
            i++;
    break;
    default:
            final.push(second);
            j++;
    break;
}
    }
    const finalLen = final.length;
    const mid = Math.ceil(finalLen/2);
    const mid2 =  finalLen % 2 !== 0;

    return !mid2 ? (final[mid-1]+final[mid])/2 : final[mid-1];
   
};