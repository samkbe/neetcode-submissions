/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiam = 0;

        function dfs(curr) {
            if (!curr) return 0;

            const maxLeft = dfs(curr.left);
            const maxRight = dfs(curr.right);

            maxDiam = Math.max(maxDiam, (maxLeft + maxRight));

            return 1 + Math.max(maxLeft, maxRight);

        }

        dfs(root);
        return maxDiam;
    }
}
