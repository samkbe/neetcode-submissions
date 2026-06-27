class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxRainWaterPerIndex = [];
        let maxLeft = 0;
        let maxRight = 0;
        let maxRainWater = 0;

        for (let i = 0; i < height.length; i++) {
            maxRainWaterPerIndex[i] = maxLeft;
            maxLeft = Math.max(maxLeft, height[i]);
        }
        for (let i = height.length - 1; i >= 0; i--) {
            let maxWater = Math.min(maxRight, maxRainWaterPerIndex[i]) - height[i];
            if (maxWater > 0) maxRainWater += maxWater;
            maxRight = Math.max(maxRight, height[i]);
        }

        return maxRainWater;
    }
}
