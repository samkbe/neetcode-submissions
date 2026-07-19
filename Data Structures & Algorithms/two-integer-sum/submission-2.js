class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};

        for (let i = 0; i < nums.length; i++) {
            hashMap[(target - nums[i])] = i;
        }
        for (let i = 0; i < nums.length; i++) {
            if (hashMap.hasOwnProperty(nums[i]) && hashMap[nums[i]] !== i) {
                return [hashMap[nums[i]], i]
            }
        }
    }
}
