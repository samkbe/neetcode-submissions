class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let outputStr = '';
        for (let string of strs) {
            outputStr += `${string.length}#${string}`;
        }
        return outputStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const outputArr = [];

        let numMode = true;
        let currNum = '';
        let i = 0;

        while (i < str.length) {
            if (numMode) {
                if (str[i] !== "#") {
                    currNum += str[i];
                    i++;
                } else {
                    numMode = false;
                    i++;
                    let subStr = '';
                    const num = i + parseInt(currNum);
                    while (i < num) {
                        subStr += str[i];
                        i++;
                    }
                    outputArr.push(subStr);
                    numMode = true;
                    currNum = '';
                }
            }
        }
        return outputArr;
    }
}
