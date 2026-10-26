class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((acc, next) => acc + next, 0);
        if (sum % 2 !== 0) return false;

        const target = sum / 2;
        let dp = new Set();
        dp.add(0);

        for (let i = nums.length - 1; i >= 0; i--) {

            let nextDp = new Set([0]);
            
            for (let item of dp) {
                const withNum = item + nums[i];
                if (withNum === target) return true;
                nextDp.add(item);
                if (withNum < target) nextDp.add(withNum);
            }
            dp = nextDp;
        }

        return dp.has(target);
    }
}
