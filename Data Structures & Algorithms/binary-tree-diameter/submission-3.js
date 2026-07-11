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
            const leftHeight = dfs(curr.left);
            const rightHeight = dfs(curr.right);
            maxDiam = Math.max(maxDiam, (leftHeight + rightHeight));
            return 1 + Math.max(leftHeight, rightHeight);

        }
        dfs(root);
        return maxDiam;
    }
}
