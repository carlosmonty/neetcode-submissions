
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.min = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */

    push(val) {
        
        this.stack.push(val)
        
        let test = this.minStack.length == 0? val:this.minStack[this.minStack.length-1]
        val = Math.min(val,test)
        this.minStack.push(val);
        console.log(this.minStack)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.minStack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1]
    }
}
