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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;

        function dfs(cur) {
            if (!cur) return 0;
            let heightLeft = dfs(cur.left);
            let heightRight = dfs(cur.right);
            if (Math.abs(heightLeft - heightRight) > 1) {
                isBalanced = false;
            }
            return 1 + Math.max(heightLeft, heightRight);

        }

        dfs(root);

        return isBalanced;
    }
}
