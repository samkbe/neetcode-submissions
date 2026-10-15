class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let minutes = 0;
        let healthyFruit = 0;
        let rottenFruit = [];

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 1) {
                    healthyFruit++;
                } else if (grid[row][col] === 2) {
                    rottenFruit.push([row, col]);
                }
            }
        }

        if (healthyFruit === 0) return 0;

        let start = 0;
        while (rottenFruit.length) {
            minutes++;
            let originalHealthyFruit = healthyFruit;
            let amt = rottenFruit.length;
            for (let i = start; i < amt; i++) {
                const [row, col] = rottenFruit[i];

                if (row < ROWS - 1 && grid[row + 1][col] === 1) {
                    grid[row + 1][col] = 2;
                    rottenFruit.push([row + 1, col]);
                    healthyFruit--;
                }
                if (row > 0 && grid[row - 1][col] === 1) {
                    grid[row - 1][col] = 2;
                    rottenFruit.push([row - 1, col]);
                    healthyFruit--;
                }
                if (col < COLS - 1 && grid[row][col + 1] === 1) {
                    grid[row][col + 1] = 2;
                    rottenFruit.push([row, col + 1]);
                    healthyFruit--;
                }
                if (col > 0 && grid[row][col - 1] === 1) {
                    grid[row][col - 1] = 2;
                    rottenFruit.push([row, col - 1]);
                    healthyFruit--;
                }

            }
            start = amt;
            if (healthyFruit === 0) return minutes;
            if (originalHealthyFruit === healthyFruit) return -1;
        }
        return -1;
    }
}
