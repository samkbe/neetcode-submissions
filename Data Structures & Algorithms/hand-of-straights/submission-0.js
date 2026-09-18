class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const count = {};
        for (let n of hand) {
            count[n] = (count[n] || 0) + 1;
        }

        const minP = new MinPriorityQueue();

        for (const key in count) {
            minP.push(Number(key));
        }

        while (!minP.isEmpty()) {
            const first = minP.front();
            for (let i = first; i < first + groupSize; i++) {
                if (!(i in count) || count[i] === 0) {
                    return false;
                }
                count[i] -= 1;

                if (count[i] === 0) {
                    if (i !== minP.front()) return false;
                    minP.pop();
                }
            }
        }
        return true;
    } 
}
