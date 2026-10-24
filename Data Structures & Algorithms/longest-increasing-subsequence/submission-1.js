class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = new Array(nums.length).fill(1);
        let max = 1;
        for (let i = dp.length - 1; i >= 0; i--) {
            let maxFromHere = 1;

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    maxFromHere = Math.max(maxFromHere, 1 + dp[j]);
                }
            }
            dp[i] = maxFromHere;
            max = Math.max(max, maxFromHere);
        }

        return max;
    }
}
