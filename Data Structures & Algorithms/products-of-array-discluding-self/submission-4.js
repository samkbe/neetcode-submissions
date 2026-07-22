class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        let accumulator = 1;

        for (let i = 0; i < nums.length; i++) {
            output[i] = accumulator;
            accumulator *= nums[i];
        }

        accumulator = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= accumulator;
            accumulator *= nums[i];
        }

        return output;
    }
}