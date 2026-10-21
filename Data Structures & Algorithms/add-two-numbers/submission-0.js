/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let currL1 = l1;
        let currL2 = l2;
        let dummy = new ListNode(null);
        let curr = dummy
        let newStr = ""
        let carry = 0;
        while(currL1 || currL2 || carry){
            const val1 = currL1?currL1.val:0
             const val2 = currL2?currL2.val:0

            let sum = val1+val2+carry;
            carry = Math.floor(sum / 10)
            sum = sum %10
            curr.next = new ListNode(sum)
            curr  = curr.next
            currL1 = currL1?currL1.next:null
            currL2 = currL2?currL2.next:null
        }
        // console.log(newStr)
        // let i = 0;
        // let prev = null;
        // while(i<newStr.length){
        //     let temp = new ListNode(newStr[i])
        //     newList.next = temp
        //     newList = newList.next
        //     i++;
        // }
        


        return dummy.next
    }
}
