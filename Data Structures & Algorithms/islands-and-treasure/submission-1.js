class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const q = new Queue();
        const visited = new Set();
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let lvl = 0;

        function add(r, c) {
            if (r < 0 || 
                c < 0 || 
                r >= ROWS || 
                c >= COLS || 
                visited.has(`${r}:${c}`) || 
                grid[r][c] === -1) {
                return;
            }
            q.push([r, c]);
            visited.add(`${r}:${c}`);
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                
                if (grid[i][j] === 0) {
                    visited.add(`${i}:${j}`);
                    q.push([i, j]);
                }
            }
        }
        while (!q.isEmpty()) {
            for (let i = q.size(); i > 0; i--) {
                const [r, c] = q.pop();
                grid[r][c] = lvl;
                add(r - 1, c);
                add(r + 1, c);
                add(r, c - 1);
                add(r, c + 1);
            }
            lvl+=1;
        }
        return grid;
    } 
}
