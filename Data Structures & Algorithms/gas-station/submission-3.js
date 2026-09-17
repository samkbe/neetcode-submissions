class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {

        let total = 0;
        for (let i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
        }

        if (total < 0) return -1;

        total = 0;
        let index = 0;
        for (let i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            if (total < 0) {
                index = i + 1;
                total = 0;
            }
        }
        return index;
    }
}
