class ListNode{
    constructor(val,nextNode = null){
        this.val = val
        this.next = nextNode;
    }
}
class LinkedList {
    constructor() {
        this.head = new ListNode(-1)
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let curr = this.head.next;
        while(curr){
            if(i === index){
                return curr.val
            }
             i++;
            curr = curr.next;
           
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newHead = new ListNode(val)
        newHead.next = this.head.next
        this.head.next = newHead;
        if(!newHead.next){
            this.tail = newHead
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next  = new ListNode(val)
        this.tail = this.tail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr  = this.head;
        let i = 0;
        while(i<index && curr){ // get node before target
           i++;
           curr = curr.next
        }

        if(curr && curr.next){
            if(curr.next == this.tail)
                this.tail = curr
            curr.next = curr.next.next
            return true;
        }
        
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head.next
        const result = [];
        
        while(curr){
            result.push(curr.val)
            curr = curr.next
        }
        return result
    }
}
