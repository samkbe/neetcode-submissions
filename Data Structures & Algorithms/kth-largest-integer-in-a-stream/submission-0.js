class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.pq = new MinPriorityQueue();
        this.k = k;

        for (let num of nums) {
            this.pq.enqueue(num);
        }

        while (this.pq.size() > this.k) {
            this.pq.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pq.enqueue(val);

        if (this.pq.size() > this.k) {
            this.pq.dequeue();
        }
        return this.pq.front();
    }
}
