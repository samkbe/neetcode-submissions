class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            if (token === "+") {
                const first = parseInt(stack.pop());
                const second = parseInt(stack.pop());
                stack.push(second + first);
            } else if (token === "-") {
                const first = parseInt(stack.pop());
                const second = parseInt(stack.pop());
                stack.push(second - first);
            } else if (token === "*") {
                const first = parseInt(stack.pop());
                const second = parseInt(stack.pop());
                stack.push(second * first);
            } else if (token === "/") {
                const first = parseInt(stack.pop());
                const second = parseInt(stack.pop());
                stack.push(Math.trunc(second / first));
            } else {
                stack.push(token);
            }
        }
        return stack[0];
    }
}

//[9,4]

//["1","2","+","3","*","4","-"]
