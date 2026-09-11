class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const output = [];

        for (const interval of intervals) {
            if (newInterval === null || interval[1] < newInterval[0]) {
                output.push(interval);
            } else if (interval[0] > newInterval[1]) {
                output.push(newInterval);
                output.push(interval);
                newInterval = null;
            } else {
                newInterval[0] = Math.min(interval[0], newInterval[0]);
                newInterval[1] = Math.max(interval[1], newInterval[1]);
            }
        }
        if (newInterval !== null) output.push(newInterval);
        return output;
    }
}
