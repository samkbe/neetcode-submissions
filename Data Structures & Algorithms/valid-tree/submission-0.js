class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // if (edges.length > n - 1) {
        //     return false;
        // }
        const adjacencyList = Array.from({length: n}, () => []);

        for (let [u, v] of edges) {
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }

        const seen = new Set();

        function dfs(i, parent) {
            if (seen.has(i)) return false;
            seen.add(i);
            for (let neighbor of adjacencyList[i]) {
                if (neighbor === parent) continue;
                if (!dfs(neighbor, i)) return false;
            }
            return true
        }

        return dfs(0, -1) && seen.size === n;
    }
}
