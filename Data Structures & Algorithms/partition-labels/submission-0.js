class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const arr = [];
        const hashMap = {};

        for (let i = 0; i < S.length; i++) {
            hashMap[S[i]] = i;
        }

        let end = 0;
        let start = 0;
        for (let i = 0; i < S.length; i++) {
            end = Math.max(end, hashMap[S[i]]);

            if (end === i) {
                arr.push((end - start) + 1);
                start = i + 1;
            }
        }

        return arr;
    }
}
