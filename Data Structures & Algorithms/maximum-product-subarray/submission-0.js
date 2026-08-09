class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let result = Math.max(...nums);
        let curMin = 1;
        let curMax = 1;

        for (let n of nums) {
            if (n === 0) {
                curMin = 1;
                curMax = 1;
                continue;
            }
            let temp = curMax * n;
            curMax = Math.max(n * curMax, n * curMin, n);
            curMin = Math.min(temp, n * curMin, n);

            result = Math.max(result, curMax);
        }
        return result;
    }
}