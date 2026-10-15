class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = [];
        const ROW = grid.length;
        const COL = grid[0].length;
        let minutes = 0;
        let freshFruit = 0;

        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                if (grid[row][col] === 1) {
                    freshFruit++;
                } else if (grid[row][col] === 2) {
                    q.push([row, col]);
                }
            }
        }

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        while (freshFruit > 0 && q.length > 0) {
            const length =  q.length;
            for (let i = 0; i < length; i++) {
                const [row, col] = q.shift();

                for (const [dr, dc] of directions) {
                    let r = row + dr;
                    let c = col + dc;

                    if (r >= 0 && r < ROW && c >= 0 && c < COL && grid[r][c] === 1) {
                        grid[r][c] = 2;
                        q.push([r, c]);
                        freshFruit--;
                    }

                }
            }
            minutes++;
        }

        return freshFruit === 0 ? minutes : -1;
    }
}
