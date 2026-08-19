class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue();

        for (let stone of stones) {
            pq.enqueue(stone);
        }

        while (pq.size() > 1) {
            let first = pq.dequeue();
            let second = pq.dequeue();
            if (first !== second) {
                pq.enqueue(first - second);
            }
        }

        return pq.size() > 0 ? pq.dequeue() : 0;
    }
}
