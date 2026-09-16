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
        
        let currCount = 0;
        let count = 0;
        const starts = intervals.sort((a, b) => a.start - b.start).map((int) => int.start);
        const ends = intervals.sort((a, b) => a.end - b.end).map((int) => int.end);

        let startPointer = 0;
        let endPointer = 0;
        while (startPointer < starts.length) {
            if (starts[startPointer] < ends[endPointer]) {
                currCount++;
                count = Math.max(currCount, count);
                startPointer++;
            } else {
                currCount--;
                endPointer++;
            }
        }
        return count;
    }
}
