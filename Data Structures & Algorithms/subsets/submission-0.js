class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = [];
        const curr = [];

        function backtrack(i) {
            if (i === nums.length) {
                subsets.push([...curr]);
                return;
            }

            backtrack(i + 1);

            curr.push(nums[i]);
            backtrack(i + 1);
            curr.pop();

        }

        backtrack(0);

        return subsets;
    }
}
