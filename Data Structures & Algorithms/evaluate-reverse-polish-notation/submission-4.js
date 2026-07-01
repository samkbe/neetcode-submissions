class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const stack = [];

        for (let item of tokens) {
            if (item === "+") {
                stack.push(parseInt(stack.pop() + stack.pop()));
            } else if (item === "-") {
                let val1 = stack.pop();
                let val2 = stack.pop();
                stack.push(parseInt(val2 - val1));
            } else if (item === "*") {
                stack.push(parseInt(stack.pop() * stack.pop()));
            } else if (item === "/") {
                let val1 = stack.pop();
                let val2 = stack.pop();
                stack.push(parseInt(Math.trunc(val2 / val1)));
            } else {
                stack.push(parseInt(item));
            }
        }
        return stack[0];
    }
}

//[ 22 ]

//                                                      |
//["10","6","9","3","+","-11","*","/","*","17","+","5","+"]