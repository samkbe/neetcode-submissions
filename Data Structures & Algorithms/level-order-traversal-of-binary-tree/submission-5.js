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
        const output = [];
        if (!root) return output;

        const q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            let arr = [];

            for (let i = q.size(); i > 0; i--) {
                let node = q.pop();

                arr.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            output.push(arr);
        }

        return output;
    }
}
