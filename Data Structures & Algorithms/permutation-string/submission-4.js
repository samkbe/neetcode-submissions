class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = {};
        let l = 0;
        let len = s1.length;
        for (let i = 0; i < s1.length; i++) {
            if (map[s1[i]]) {
                map[s1[i]]++;
            } else {
                map[s1[i]] = 1;
            }
        }

        for (let r = 0; r < s2.length; r++) {
            const char = s2[r];
            if (map[char] !== undefined) {
                if (map[char] > 0) {
                    len--;
                }
                map[char]--;
            }
            if ((r - l + 1) > s1.length ) {
                let leftChar = s2[l];
                if (map[leftChar] !== undefined) {
                    if (map[leftChar] >= 0) {
                        len++;
                    }
                    map[leftChar]++;
                }
                l++;
            }
            if (len === 0) {
                return true;
            }
        }
        return false
    }
}

//{a:-1,b:0,c:1}
//length = 1

//     |
//   |
//lecaabee