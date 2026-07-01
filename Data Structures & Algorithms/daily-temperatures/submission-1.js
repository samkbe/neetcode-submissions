class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const output = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
                const [_, tempIndex] = stack.pop();
                output[tempIndex] = i - tempIndex;
            }
            stack.push([temperatures[i], i]);
        }
        return output;
    }
}


//[38, 30]

//        |
//[30,38,30,36,35,40,28]
//[]