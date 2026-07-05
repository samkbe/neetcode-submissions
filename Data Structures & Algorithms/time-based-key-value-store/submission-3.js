class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const stamp = this.keyStore.get(key);
        if (stamp) {
            stamp.push([value, timestamp])
            this.keyStore.set(key, stamp);
        } else {
            this.keyStore.set(key, [[value, timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key);

        if (!arr) return "";

        let l = 0;
        let r = arr.length - 1;
        let maxIndex = -Infinity;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (arr[mid][1] > timestamp) {
                r = mid - 1;
            } else if (arr[mid][1] < timestamp) {
                maxIndex = Math.max(maxIndex, mid);
                l = mid + 1;
            } else {
                return arr[mid][0];
            }
        }
        return maxIndex === -Infinity ? "" : arr[maxIndex][0];
    }
}