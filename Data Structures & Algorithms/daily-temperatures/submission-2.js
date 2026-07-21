class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const output = [];

        for (let i = 0; i < temperatures.length; i++) {

            while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
                const [_, prevIndex] = stack.pop();
                output[prevIndex] = i - prevIndex;
            }
            stack.push([temperatures[i], i]);
        }

        while (stack.length) {
            const [_, index] = stack.pop();
            output[index] = 0;
        }
        return output;
    }
}

//[[40, 5], [28, 6]]

//                     |
//[30,38,30,36,35,40,28]

//[1,4,1,2,1,0,0]