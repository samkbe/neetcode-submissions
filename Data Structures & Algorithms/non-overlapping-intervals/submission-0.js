class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let removals = 0;
        let endpoint = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];
            if (interval[0] < endpoint) {
                //This means we're overlapping
                endpoint = Math.min(endpoint, interval[1]);
                removals++;
            } else {
                endpoint = interval[1];
            }
        }

        return removals;
    }
}
