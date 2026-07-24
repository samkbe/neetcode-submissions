class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const output = [];
        const cur = [];

        function dfs(index, sum) {
            if (sum === target) {
                output.push([...cur]);
                return;
            }
            if (sum > target || index > nums.length - 1) {
                return;
            }
            for (let i = index; i < nums.length; i++) {
                cur.push(nums[i]);
                dfs(i, sum + nums[i]);
                cur.pop();
            }
        }

        dfs(0, 0);

        return output;
    }
}
