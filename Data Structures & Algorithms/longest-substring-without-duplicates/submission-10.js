class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) return s.length;
        let maxLength = 0;
        let l = 0;
        let r = 1;

        const windowMap = {[s[l]]: true }

        while (r < s.length) {
            if (windowMap[s[r]]) {
                while ( l < r && windowMap[s[r]]) {
                    delete windowMap[s[l]];
                    l++;
                }
                windowMap[s[r]] = true;
            } else {
                windowMap[s[r]] = true;
            }
            r++;
            maxLength = Math.max(maxLength, (r - l));
        }
        return maxLength;
    }
}

//[ab]
// | |
//abcabcbb
