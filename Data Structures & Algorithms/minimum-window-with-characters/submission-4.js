class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const freqMap = {};
        let needed = 0;
        let minLength = Infinity;
        let indexes;
        let l = 0;

        for (let char of t) {
            if (!freqMap[char]) {
                freqMap[char] = 1;
            } else {
                freqMap[char]++;
            }
            needed++;
        }
        

        for (let r = 0; r < s.length; r++) {
            if (freqMap.hasOwnProperty([s[r]])) {
                freqMap[s[r]]--;
                if (freqMap[s[r]] >= 0) {
                    needed--;
                }
            }
            while (needed <= 0 && l <= r) {
                if ((r - l) < minLength) {
                    minLength = r - l;
                    indexes = [l, r];
                }

                if (freqMap.hasOwnProperty([s[l]])) {
                    freqMap[s[l]]++;
                    if (freqMap[s[l]] > 0) {
                        needed++;
                    }
                }

                l++;
            }
        }

        return minLength === Infinity ? "" : s.slice(indexes[0], indexes[1] + 1);
    }
}

//minLength = 0
//[0,0]
//{a:1}
//needed = 0
// |
//|
//aa


//"YXAZ"