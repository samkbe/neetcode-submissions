class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0;
        const arr = [];
        let accumulator = 0;

        for (let i = 0; i < height.length; i++) {
            arr[i] = accumulator;
            accumulator = Math.max(accumulator, height[i]);
        }
        accumulator = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            let maxWater = Math.min(arr[i], accumulator) - height[i];
            if (maxWater > 0) total += maxWater;
            accumulator = Math.max(accumulator, height[i]);
        }

        return total;
    }
}


//[0,1,0,2,1,0,1,3,2,1,2,1]

//11
//[0,0,1,1,3,4,4,5,8,10,11,13,14]