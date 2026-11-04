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
    maxDepth(root) {
        let maxDepth = 0;
        
        function recurse(node, depth) {
            if (!node) return;
            maxDepth = Math.max(depth, maxDepth);
            recurse(node.left, depth + 1);
            recurse(node.right, depth + 1);
        }

        recurse(root, 1);
        return maxDepth;
    }
}
