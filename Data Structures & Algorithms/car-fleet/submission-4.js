class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        position = position.map((pos, i) => [pos, ((target - pos) / speed[i]) ]).sort((a, b) => b[0] - a[0]);

        for (let p of position) {
            if (!stack.length || p[1] > stack[stack.length - 1][1]) {
                stack.push(p);
            }
        }
        return stack.length;
    }
}