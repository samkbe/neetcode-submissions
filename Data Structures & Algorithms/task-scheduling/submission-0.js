class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const hashMap = {};
        const maxHeap = new MaxPriorityQueue();
        let time = 0;
        const q = new Queue();

        for (let task of tasks) {
            if (hashMap.hasOwnProperty(task)) {
                hashMap[task]++;
            } else {
                hashMap[task] = 1;
            }
        }

        for (let val of Object.values(hashMap)) {
            maxHeap.push(val);
        }

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                let cnt = maxHeap.pop() - 1;
                if (cnt > 0) {
                    q.push([cnt, time + n]);
                }
            }

            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.push(q.pop()[0]);
            }
        }

        return time;
    }
}