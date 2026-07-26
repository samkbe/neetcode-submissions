class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const output = [];
        const cols = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        let board = Array.from({ length: n }, () => Array(n).fill("."));

        function dfs(r) {

            if (r === n) {
                output.push(board.map((row) => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (
                    cols.has(c) || 
                    posDiag.has(r + c) ||
                    negDiag.has(r - c)
                ) {
                    continue;
                }
                cols.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = "Q";

                dfs(r + 1);

                cols.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
                board[r][c] = ".";
            }
        }

        dfs(0);
        return output;
    }
}
