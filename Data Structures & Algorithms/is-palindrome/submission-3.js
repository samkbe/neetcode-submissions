class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const chars = {
            "a": true,
            "b": true,
            "c": true,
            "d": true,
            "e": true,
            "f": true,
            "g": true,
            "h": true,
            "i": true,
            "j": true,
            "k": true,
            "l": true,
            "m": true,
            "n": true,
            "o": true,
            "p": true,
            "q": true,
            "r": true,
            "s": true,
            "t": true,
            "u": true,
            "v": true,
            "w": true,
            "x": true,
            "y": true,
            "z": true,
            "0": true,
            "1": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
            "6": true,
            "7": true,
            "8": true,
            "9": true,
        }
        let l = 0;
        let r = s.length - 1;

        s = s.toLowerCase();

        while (l < r) {
            if (!chars.hasOwnProperty(s[l])) {
                l++;
                continue;
            }
            if (!chars.hasOwnProperty(s[r])) {
                r--;
                continue;
            }
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
