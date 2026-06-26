class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        const occurenceArr = new Array(nums.length + 1).fill(null).map(() => []);
        const topKElements = [];
        let kCount = 0;

        for (let num of nums) {
            if (!freqMap[num]) {
                freqMap[num] = 1;
            } else {
                freqMap[num]++;
            }
        }

        for (let key in freqMap) {
            occurenceArr[freqMap[key]].push(key);
        }

        for (let i = occurenceArr.length - 1; i >= 0; i--) {
            for (let j = 0; j < occurenceArr[i].length; j++) {
                topKElements.push(occurenceArr[i][j]);
                kCount++;
                if (kCount >= k) return topKElements;
            }
        }

    }
}
