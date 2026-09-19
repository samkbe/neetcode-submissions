class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const arr = [];
        for (let trip of triplets) {
            let isValid = true;
            for (let i = 0; i < 3; i++) {
                if (trip[i] > target[i]) isValid = false;
            }
            if (isValid) arr.push(trip);
        }

        let first = false;
        let second = false;
        let third = false;

        for (let trip of arr) {
            for (let i = 0; i < 3; i++) {
                if (trip[i] === target[i]) {
                    if (i === 0) first = true;
                    if (i === 1) second = true;
                    if (i === 2) third = true;
                }
            }
        }

        return (first && second && third);
    }
}
