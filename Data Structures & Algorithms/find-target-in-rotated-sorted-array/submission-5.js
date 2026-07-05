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
//if target is less than m
    //if m > r and target <= r
        //go right
    //else
        //go left
//if target is greater than m
    //if m < l and target >= l
        //go left
    //else
        //go right


//target = 6

//l
//     m
//           r
//[3,4,5,6,1,2]


//l
//         m
//               r
//[5,6,7,0,1,2,3,4]        