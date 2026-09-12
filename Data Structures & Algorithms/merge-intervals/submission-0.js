class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const output = [];

        let curr = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            const next = intervals[i];

            if (next[0] <= curr[1]) {
                curr[1] = Math.max(curr[1], next[1]);
            } else {
                output.push(curr);
                curr = next;
            }
        }
        output.push(curr);

        return output;
    }
}
