class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxRect = 0;

        for (let i = 0; i < heights.length; i++) {
            let latestIndex = i;
            while (stack.length && stack[stack.length - 1][1] >= heights[i]) {
                const [ j, val ] = stack.pop();
                latestIndex = j;
                maxRect = Math.max(val * ((i - j)), maxRect);
            }
            stack.push([latestIndex, heights[i]]);
        }

        while (stack.length) {
            const [i, val] = stack.pop();
            maxRect = Math.max(maxRect, ((heights.length - i) * val));
        }

        return maxRect;
    }
}

//8
//[[1,0],[2,2],[3,5]]
//           |
//[2,1,5,6,2,3]