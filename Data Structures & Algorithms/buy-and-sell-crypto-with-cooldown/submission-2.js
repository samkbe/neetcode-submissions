class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const dp = {};

        function dfs(i, buying) {
            if (i >= prices.length) {
                return 0;
            };
            let key = `${i}-${buying}`;

            if (dp[key]) return dp[key];

            if (buying) {
                let buy = dfs(i + 1, false) - prices[i];
                let cooldown = dfs(i + 1, buying);
                dp[key] = Math.max(buy, cooldown);
            } else {
                let sell = dfs(i + 2, true) + prices[i];
                let cooldown = dfs(i + 1, buying);
                dp[key] = Math.max(sell, cooldown)
            }
            return dp[key];

        }
        return dfs(0, true);
    }
}
