class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length - 1;
        nums.push(0);
        nums.push(0);

        for (let i = n; i >= 0; i--) {
            nums[i] = Math.max(nums[i] + nums[i + 2], nums[i + 1]);
        }
        return nums[0];
    }
}
