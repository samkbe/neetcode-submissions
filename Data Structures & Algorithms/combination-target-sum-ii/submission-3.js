class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();

        const output = [];
        const path = [];

        function backtrack(index, sum) {
            if (sum === target) {
                output.push([...path]);
                return;
            }
            if (sum > target || index === candidates.length) return;

            //left side
            path.push(candidates[index]);
            backtrack(index + 1, sum + candidates[index]);
            path.pop();

            let nextNum = index;

            //right side
            while (candidates[nextNum] === candidates[index] && nextNum < candidates.length) {
                nextNum++;
            }
            backtrack(nextNum, sum);
        }

        backtrack(0, 0);
        return output;
    }
}
