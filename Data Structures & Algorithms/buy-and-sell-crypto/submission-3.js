class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices) {
        let left = 0;
        let right = 1
        let maxProfit = 0;

        while (right < prices.length) {
            maxProfit = Math.max(maxProfit, (prices[right] - prices[left]));
            if (prices[right] < prices[left]) {
                left = right;
            }
            right++;
        }
        return maxProfit;
    }
}
