class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const arr = [];
        const cur = [];

        candidates.sort((a,b) => b - a);

        function dfs(i, remaining) {
            if (remaining === 0) {
                arr.push([...cur]);
                return;
            }

            if (i >= candidates.length || remaining < 0) return;

            cur.push(candidates[i]);
            dfs(i + 1, remaining - candidates[i]);
            cur.pop();

            while (candidates[i] === candidates[i + 1] && i < candidates.length - 1) i++;
            dfs(i + 1, remaining);
        }

        dfs(0, target);

        return arr;
    }
}