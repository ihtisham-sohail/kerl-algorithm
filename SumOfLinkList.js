
/**
  * @Time 99 ms
  * @Memory 47.3 MB
  */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let remainder = 0;
    const sum = [];

    let breaker = true;
    let stop1 = false;
    let stop2 = false;

    while(breaker){
        const first = !stop1 ? l1.val : 0;
        const second = !stop2 ? l2.val : 0;
        let summer = first+second;
        summer = remainder + summer; 
        if(summer<10){
            sum.unshift(summer);
            remainder = 0;
        }else if(summer>=10){
            remainder = parseInt(summer/10);
            sum.unshift(summer%10);
        }

        if(l1.next){
            l1 = l1.next;
        }else{
            stop1=true;
        }
        if(l2.next){
            l2 = l2.next;
        }else{
            stop2=true;
        }

        if(stop1 && stop2){
            if(remainder){
                sum.unshift(remainder);
            }
            breaker = false;
        }
    }

let head = sum.reduce((acc, curr) => {
  if (acc == null) {
    acc = new ListNode(curr);

  } else {
    acc = new ListNode(curr, acc);
  }
  return acc;
}, null);

    return head;
};