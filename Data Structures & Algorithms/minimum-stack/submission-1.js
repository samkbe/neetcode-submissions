class MinStack {
    constructor() {
        this.minStack = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        //First value edge case
        if (!this.stack.length && !this.minStack.length) {
            this.stack.push(val);
            this.minStack.push(0);
            return;
        }

        let minValueIndex = this.minStack[this.minStack.length - 1];

        if (val < this.stack[minValueIndex]) {
            minValueIndex = this.stack.length;
        }
        this.minStack.push(minValueIndex);
        this.stack.push(val);
    }   

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let minIndex = this.minStack[this.minStack.length - 1];
        return this.stack[minIndex];
    }
}
