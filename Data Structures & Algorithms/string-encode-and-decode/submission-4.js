class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';

        for (let str of strs) {
            encodedStr += `${JSON.stringify(str.length)}#`
            for (let char of str) {
                encodedStr += char;
            }
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let i = 0;
        while (i < str.length) {
            let num = '';
            while (str[i] !== '#') {
                num += str[i];
                i++;
            }
            num = parseInt(num);
            i++;
            let right = i + num;
            output.push(str.slice(i, right));
            i = right;
        }
        return output;
    }
}


//  |    
//5#hello5#world
