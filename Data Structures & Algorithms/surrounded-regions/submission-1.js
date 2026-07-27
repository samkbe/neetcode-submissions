class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        function dfs(r, c) {
            if (
                r === ROWS || 
                c === COLS ||
                r < 0 ||
                c < 0 ||
                board[r][c] !== 'O'
            ) {
                return;
            }
            board[r][c] = 'T';
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        for (let r = 0; r < ROWS; r++) {
            if (r === 0 || r === ROWS - 1) {
                for (let c = 0; c < board[r].length; c++) {
                    dfs(r, c);
                }
                continue;
            }
            dfs(r, 0);
            dfs(r, COLS - 1);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'T') {
                    board[r][c] = 'O';
                } else {
                    board[r][c] = 'X';
                }
            }
        }
        return board;
    }
}
