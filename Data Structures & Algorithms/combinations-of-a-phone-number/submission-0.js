class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];
        const output = [];

        const dict = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        function dfs(i, str) {
            if (str.length === digits.length) {
                output.push(str);
                return;
            }
            let combo = dict[digits[i]];
            for (let char of combo) {
                dfs(i + 1, str + char);
            }
        }

        dfs(0, '');

        return output;
    }
}
