class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const output = [];
        const pSeen = new Set();
        const aSeen = new Set();
        
        function dfs(r, c, set, prevValue) {
            if (set.has(`${r}:${c}`) || 
                r < 0 || 
                c < 0 || 
                r === ROWS || 
                c === COLS || 
                heights[r][c] < prevValue
            ) {
                return;
            }
            set.add(`${r}:${c}`);
            dfs(r - 1, c, set, heights[r][c]);
            dfs(r + 1, c, set, heights[r][c]);
            dfs(r, c - 1, set, heights[r][c]);
            dfs(r, c + 1, set, heights[r][c]);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pSeen, heights[0][c]);
            dfs(ROWS - 1, c, aSeen, heights[ROWS - 1][c]);
        }
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pSeen, heights[r][0]);
            dfs(r, COLS - 1, aSeen, heights[r][COLS - 1]);
        }

        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[r].length; c++) {
                if (pSeen.has(`${r}:${c}`) && aSeen.has(`${r}:${c}`)) {
                    output.push([r,c]);
                }
            }
        }

        return output;
    }
}
