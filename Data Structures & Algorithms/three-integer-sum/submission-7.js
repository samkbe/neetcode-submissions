class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const threeSumPairs = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const twoSum = nums[j] + nums[k];
                if (twoSum > (nums[i] * -1)) {
                    k--;
                } else if (twoSum < (nums[i] * -1)) {
                    j++;
                } else {
                    threeSumPairs.push([nums[i], nums[j], nums[k]]);
                    k--;
                    j++;

                    while (j < nums.length && nums[j] === nums[j - 1] ) {
                        j++;
                    }
                    while (k > j && nums[k] === nums[k + 1]) {
                        k--;
                    }
                }
            }
        }
        return threeSumPairs;
    }
}

//[[-1,-1,2], ]


//          i          j           k
//[-1, -1, -2, -3, -4, 0, 0, 1, 2, 3, 4]
