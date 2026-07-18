/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();

        function dfs(node) {
            if (!node) return
            if (oldToNew.has(node)) return oldToNew.get(node);

            const newNode = new Node(node.val);
            oldToNew.set(node, newNode);

            for (let neighbor of node.neighbors ) {
                newNode.neighbors.push(dfs(neighbor));
            }
            return newNode;
        }
        const output = dfs(node);
        return !oldToNew.size ? null : output;
    }
}