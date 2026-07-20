class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const arr = [];

        function dfs(l, r, str) {
            if (l === 0 && r === 0) {
                arr.push(str);
                return;
            }
            if (r < l || l < 0) return;

            dfs(l - 1, r, str + '(');
            dfs(l, r - 1, str + ')');

        }

        dfs(n, n, '');

        return arr;
    }
}


//l=0, r=0

//'(()'