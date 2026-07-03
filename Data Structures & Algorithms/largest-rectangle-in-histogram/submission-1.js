class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxSize = 0;

        for (let i = 0; i < heights.length; i++) {
            const newVal = [heights[i], i];

            while (stack.length && heights[i] <= stack[stack.length - 1][0]) {
                const [ poppedHeight, poppedIndex ] = stack.pop();
                maxSize = Math.max(maxSize, (poppedHeight * (i - poppedIndex)));
                newVal[1] = poppedIndex;
            }
            stack.push(newVal);
        }

        const rightBoundary = heights.length;

        while (stack.length) {
            const [height, index] = stack.pop();
            maxSize = Math.max(maxSize, (height * (rightBoundary - index)));
        }

        return maxSize;
    }
}

//      |
//    x
//    x
//    x
//    x
//  x x x
//  x x x
//x x x x
//1,3,7,3