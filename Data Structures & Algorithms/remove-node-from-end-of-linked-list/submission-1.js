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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0;
        let curr = head;

        while(curr){
            len++;
            curr = curr.next
        }

        let index = Math.floor(len - n)
        let i = 0;
        let arr = [];
        curr = head
        if(index == 0){
            return head.next
        }
        while(curr){
            if(i == index-1){
                let temp = curr.next.next
                curr.next = temp
            }
            i++;
            curr = curr.next
        }
        while(curr){
            head = curr
            curr = curr.next
        }
      return head

    }
}
