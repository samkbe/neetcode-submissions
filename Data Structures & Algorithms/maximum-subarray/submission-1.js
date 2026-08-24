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
            prefixSum += nums[i];
            max = Math.max(max, prefixSum);
        }

        return max;
    }
}
