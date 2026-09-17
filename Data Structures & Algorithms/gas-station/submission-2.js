class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const tank = [];

        for (let i = 0; i < gas.length; i++) {
            tank[i] = gas[i] - cost[i];
        }

        let total = 0;
        for (let val of tank) {
            total += val;
        }
        if (total < 0) return -1;

        total = 0;
        let index = 0;
        for (let i = 0; i < tank.length; i++) {
            total += tank[i];
            if (total < 0) {
                index = i + 1;
                total = 0;
            }
        }
        return index;
    }
}
