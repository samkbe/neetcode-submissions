class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        const perms = [];
        const cur = [];
        const used = new Set();

        function dfs() {
            if (cur.length === nums.length) {
                perms.push([...cur]);
                return;
            }

            for (let num of nums) {
                if (used.has(num)) {
                    continue;
                }
                cur.push(num);
                used.add(num);
                dfs();
                const val = cur.pop();
                used.delete(val);
            }
        }

        dfs();
        return perms;
    }
}
