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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        intervals.sort((a, b) => a.start - b.start);
        let minStart = -1;
        for (let item of intervals) {
            if (item.start < minStart) return false;
            minStart = Math.max(minStart, item.end);
        }

        return true;
    }
}
