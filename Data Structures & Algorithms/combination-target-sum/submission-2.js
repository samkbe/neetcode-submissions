class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const output = [];
        const combo = [];

        function backtrack(start, sum) {
            if (sum === target) {
                output.push([...combo]);
                return;
            }
            if (sum > target) return;

            for (let i = start; i < nums.length; i++) {
                combo.push(nums[i]);
                backtrack(i, sum + nums[i]);
                combo.pop();
            }
        }
        backtrack(0, 0);
        
        return output;
    }
}
