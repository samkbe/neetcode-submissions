class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] === '1') {
                    islandCount++;
                    dfs(row, col);
                }
            }
        }

        function dfs(row, col) {
            grid[row][col] = 'x';

            if (row > 0 && grid[row - 1][col] === '1') {
                dfs(row - 1, col);
            }
            if (row < grid.length - 1 && grid[row + 1][col] === '1') {
                dfs(row + 1, col);
            }
            if (col > 0 && grid[row][col - 1] === '1') {
                dfs(row, col - 1);
            }
            if (col < grid[0].length - 1 && grid[row][col + 1] === '1') {
                dfs(row, col + 1);
            }

        }

        return islandCount;
    }
}

//2,1
// [
//     ["0","x","1","1","0"],
//     ["0","x","0","1","0"],
//     ["x","x","0","0","0"],
//     ["0","0","0","0","0"]
// ]

