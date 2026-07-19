class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const arr = [];
        const cur = [];

        nums.sort((a, b) => b - a);

        function dfs(i) {
            if (i >= nums.length) {
                arr.push([...cur]);
                return;
            }

            //Include number
            cur.push(nums[i]);
            dfs(i + 1);

            cur.pop();

            //exclude number
            while (i <= nums.length - 2 && nums[i] === nums[i + 1]) i++;
            dfs(i + 1);
        }
        dfs(0);
        return arr;
    }
}
