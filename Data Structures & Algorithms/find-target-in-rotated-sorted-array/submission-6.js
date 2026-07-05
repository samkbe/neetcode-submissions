class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((r + l) / 2);

            if (nums[mid] > target) {
                if (nums[mid] > nums[r] && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else if (nums[mid] < target) {
                if (nums[mid] < nums[l] && target >= nums[l]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                return mid;
            }
        }
        return -1;
    }
}    