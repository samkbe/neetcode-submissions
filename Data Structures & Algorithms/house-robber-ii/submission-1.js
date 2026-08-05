class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, nums.length - 1)));
    }

    helper(arr) {
        let rob1 = 0;
        let rob2 = 0;

        for (let n of arr) {
            let temp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
