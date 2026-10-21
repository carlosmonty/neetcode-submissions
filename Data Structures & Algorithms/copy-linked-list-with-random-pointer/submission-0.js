// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map();
                map.set(null, null);

        let curr = head;
        let i = 0;
        while(curr){
            let newNode = new Node(curr.val)
            map.set(curr,newNode)
            curr = curr.next;
            
        }

        curr = head;
        while(curr){
            let copy = map.get(curr)
            copy.next = map.get(curr.next)
            copy.random = map.get(curr.random)
            curr = curr.next
        }
        return map.get(head)
    }
}
