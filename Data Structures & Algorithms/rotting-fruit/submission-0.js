class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let fruitCount = 0;
        let minutes = 0;
        let seen = new Set();
        let q = new Queue();

        function add(r, c) {
            if (r < 0 || 
                c < 0 || 
                r === ROWS || 
                c === COLS || 
                grid[r][c] !== 1 || 
                seen.has(`${r}:${c}`)
            ) {
                return false;
            }
            grid[r][c] = 2;
            fruitCount--;
            q.push([r, c]);
            seen.add(`${r}:${c}`);
            return true;
        }

        for (let i = 0; i < ROWS; i++ ) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    fruitCount++;
                } else if (grid[i][j] === 2) {
                    q.push([i, j]);
                    seen.add(`${i}:${j}`);
                }
            }
        }

        while (!q.isEmpty()) {
            let isMinuteNeeded = false;

            for (let i = q.size(); i > 0; i--) {
                const [r, c] = q.pop();

                let didChange = false;
                const args = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]];

                for (let i = 0; i < args.length; i++) {
                    if (add(...args[i])) {
                        didChange = true;
                    }
                }
                if (!isMinuteNeeded && didChange) isMinuteNeeded = true;
            }
            if (isMinuteNeeded) minutes++;
        }
        if (fruitCount !== 0) {
            return -1;
        }
        return minutes;
    }
}
