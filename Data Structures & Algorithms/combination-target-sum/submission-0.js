class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const output = [];
        const cur = [];
        function dfs(i, remaining) {
            if (remaining === 0) {
                output.push([...cur]);
                return;
            }
            if (remaining < 0 || i >= nums.length) return;
            cur.push(nums[i]);
            dfs(i, remaining - nums[i]);
            cur.pop();
            dfs(i + 1, remaining);
        }
        dfs(0, target);
        return output;
    }
}

//1
//[3,4,5]

//[3,3,3,3,4]