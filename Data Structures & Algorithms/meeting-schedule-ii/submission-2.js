/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = intervals.map((val) => val.start).sort((a, b) => a - b);
        const ends = intervals.map((val) => val.end).sort((a, b) => a - b);
        let maxCount = 0;
        let count = 0;
        let startIndex = 0;
        let endIndex = 0;

        while (startIndex < starts.length) {
            if (starts[startIndex] < ends[endIndex]) {
                count++;
                startIndex++;
                maxCount = Math.max(count, maxCount);
            } else {
                count--;
                endIndex++;
            }
        }
        return maxCount;
    }
}
