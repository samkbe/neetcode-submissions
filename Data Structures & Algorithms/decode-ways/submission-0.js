class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = Array.from({length: s.length + 1}).fill(-1);

        function recurse(i) {
            if (i === s.length) return 1;
            if (s[i] === '0') return 0;
            if (memo[i] !== -1) return memo[i];

            let count = recurse(i + 1);
            if (i + 1 < s.length && Number(s.slice(i, i + 2)) <= 26) {
                count += recurse(i + 2);
            }
            memo[i] = count;
            return count;
        }

        return recurse(0);
    }
}
