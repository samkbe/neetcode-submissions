class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const output = [];
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (let [x, y] of points) {
            maxHeap.enqueue([(x*x + y*y), [x, y]]);
            while (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        while (maxHeap.size() > 0) {
            output.push(maxHeap.dequeue()[1]);
        }

        return output;
    }
}
