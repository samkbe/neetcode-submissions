class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashMap = {};

        for (let char of s) {
            if (hashMap[char]) {
                hashMap[char]++;
            } else {
                hashMap[char] = 1;
            }
        }
        for (let char of t) {
            if (!hashMap.hasOwnProperty(char)) return false;
            hashMap[char]--;
        }

        for (let key in hashMap) {
            if (!hashMap.hasOwnProperty(key) || hashMap[key] !== 0) {
                return false;
            }
        }

        return true;
    }
}
