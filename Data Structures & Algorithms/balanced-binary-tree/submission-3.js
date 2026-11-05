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

        function recurse(node) {
            if (!node) return [true, 0];

            const left = recurse(node.left);
            const right = recurse(node.right);

            const balance = Math.abs(left[1] - right[1]) <= 1 && (left[0] && right[0]);
            
            return [balance, 1 + Math.max(left[1], right[1])];
        }

        return recurse(root)[0];
    }
}
