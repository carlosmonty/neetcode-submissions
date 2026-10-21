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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next;

        while(fast && fast.next){ //get midpoint
            slow = slow.next
            fast = fast.next.next
        }
        let second = slow.next //second half of list
               let prev = (slow.next = null)
        while(second){ // reverse second list
            let temp = second.next;
            second.next = prev
            prev = second
            second = temp
       
        } 
        let first = head
        second = prev
        // combine first half and second
        while(second!=null){

            let tempL1 = first.next
            let tempL2 = second.next
            first.next = second
            second.next = tempL1
            first = tempL1
            second = tempL2

        }

    }
}
