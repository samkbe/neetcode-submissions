class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const charMap = {
            "(": ")",
            "[": "]",
            "{": "}",
        }

        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                const openingChar = stack.pop();
                if (charMap[openingChar] !== char) {
                    return false;
                }
            }
        }
        return stack.length ? false : true;
    }
}