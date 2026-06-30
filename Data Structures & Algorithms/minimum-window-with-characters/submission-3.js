class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l = 0;
        const freqMap = {};
        let needed = t.length;
        let shortest = Infinity;
        let indexes;
        for (let i = 0; i < t.length; i++) {
            if (freqMap[t[i]]) {
                freqMap[t[i]]++;
            } else {
                freqMap[t[i]] = 1;
            }
        }

        for (let r = 0; r < s.length; r++) {
            const rightChar = s[r];

            if (freqMap[rightChar] !== undefined) {
                if (freqMap[rightChar] > 0) {
                    needed--;
                }
                freqMap[rightChar]--;
            }
            while (needed === 0 && l <= r) {
                let leftChar = s[l];
                const length = (r - l + 1);
                if (length < shortest) {
                    indexes = [l, r + 1];
                    shortest = length;
                }
                if (freqMap[leftChar] !== undefined) {
                    if (freqMap[leftChar] >= 0) {
                        needed++;
                    }
                    freqMap[leftChar]++;
                }
                l++;
            }
        }
        return shortest === Infinity ? "" : s.slice(indexes[0], indexes[1]);
    }
}

//{a:0}
//needed = 0
// |
//|
//ab