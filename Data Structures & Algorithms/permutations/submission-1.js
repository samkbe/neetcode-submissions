class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const output = [];
        const path = [];
        const used = Array.from({length: nums.length}).fill(false);
        
        function recurse() {
            if (path.length === nums.length) {
                output.push([...path]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                used[i] = true;
                path.push(nums[i]);
                recurse();
                path.pop();
                used[i] = false;
            }
        }
        recurse();
        return output;
    }
}
