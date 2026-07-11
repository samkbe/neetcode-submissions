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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree(a, b) {
        if (!a && !b) return true;
        if (a && b && a.val === b.val) {
            return this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right);
        }
        return false;
    }
    isSubtree(root, subRoot) {
        
        if (!root) return false;

        const isSame = this.isSameTree(root, subRoot);

        if (isSame) {
            return true;
        } else {
            return this.isSubtree(root.right, subRoot) || this.isSubtree(root.left, subRoot);
        }
    }
}
