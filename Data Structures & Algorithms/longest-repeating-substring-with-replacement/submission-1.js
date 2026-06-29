class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;
        let longestSubstring = 0;
        let largestWindow = 0;
        const letterMap = {};


        //x:2
        //y:1
        //XYYX

        while (r < s.length) {
            if (letterMap[s[r]]) {
                letterMap[s[r]]++;
            } else {
                letterMap[s[r]] = 1;
            }
            largestWindow = Math.max(letterMap[s[r]], largestWindow);
            if (((r - l + 1) - largestWindow) <= k) {
                longestSubstring = Math.max(longestSubstring, (r - l + 1));
            } else {
                letterMap[s[l]]--;
                l++;
            }
            r++;
        }

        return longestSubstring;
    }
}