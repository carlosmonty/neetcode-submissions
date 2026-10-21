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
     * @return {ListNode}
     * 0->1->2->3
     *    c
     * prev = null ; curr =null
     * curr.prev = prev
     * curr  = curr.next
     * 
     */
    reverseList(head) {
        let prev= null;
        let curr = head
        while(curr){
            let temp = curr.next
            curr.next = prev
            prev= curr
            curr = temp
            
           

        }
        return prev
    }
}
