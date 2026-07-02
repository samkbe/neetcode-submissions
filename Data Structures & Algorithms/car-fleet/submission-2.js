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

        console.log(position);

        for (let p of position) {
            if (!stack.length || p[1] > stack[stack.length - 1][1]) {
                stack.push(p);
            }
        }
        return stack.length;  
    }
}


//target = 10
//position = [1,4,2]
//speed = [3,2,1]

//4 > 7 > 10 = 3 steps
//6 > 8 > 10 = 3 steps
//3>4>5>6>7>8>9>10 = 8 steps