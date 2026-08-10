class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        const hashMap = {};

        for (let word of wordDict) {
            if (!hashMap[word]) hashMap[word] = true;
        }

        const memo = new Map();

        function recurse(index) {
            if (index >= s.length) {
                return true;
            }

            const result = memo.get(index);

            if (result !== undefined) return result;

            for (let j = index; j < s.length + 1; j++) {
                if (hashMap[s.slice(index, j)]) {
                    if (recurse(j)) {
                        memo.set(index, true);
                        return true;
                    } else {
                        memo.set(index, false);
                        continue;
                    };
                }
            }

            return false;
        }
        return recurse(0);
    }
}
