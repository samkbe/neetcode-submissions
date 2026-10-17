class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        function houseRobber(arr) {
            let rob1 = 0;
            let rob2 = 0;

            for (let num of arr) {
                let temp = Math.max(num + rob1, rob2);
                rob1 = rob2;
                rob2 = temp;
            }
            return rob2;
        }
        return Math.max(houseRobber(nums.slice(1)), houseRobber(nums.slice(0, nums.length - 1)))
    }
}
