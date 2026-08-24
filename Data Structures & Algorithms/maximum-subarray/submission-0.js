class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let prefixSum = nums[0];
        let max = nums[0];

        for (let i = 1; i < nums.length; i++) {            
            if (prefixSum < 0) prefixSum = 0;
            max = Math.max(max, prefixSum + nums[i]);
            prefixSum += nums[i];
        }

        return max;
    }
}
