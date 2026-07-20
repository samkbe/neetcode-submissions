class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const hashSet = new Set();
        const ROWS = board.length;
        const COLS = board[0].length;

        function dfs(r, c, i) {
            if (i === word.length) {
                return true;
            }
            if (r < 0 || 
                c < 0 || 
                r > ROWS - 1 || 
                c > COLS - 1 || 
                board[r][c] !== word[i] || 
                hashSet.has(`${r},${c}`)) {
                    return false;
            }
            hashSet.add(`${r},${c}`);
            const res = (
                dfs(r + 1, c, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1)
            );
            hashSet.delete(`${r},${c}`);
            return res;
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}
