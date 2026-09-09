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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        const output = [];
        const q = [root];

        while (q.length) {
            let len = q.length;
            let arr = [];
            for (let i = 0; i < len; i++) {
                const node = q.shift();
                arr.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            output.push(arr);
        }

        return output;
    }
}
