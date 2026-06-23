class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];

        let accum = 1;

        for (let i = 0; i < nums.length; i++) {
            output[i] = accum;
            accum *= nums[i]; 
        }
        accum = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= accum;
            accum *= nums[i];
        }

        return output;
    }
}