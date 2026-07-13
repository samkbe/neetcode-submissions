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
        const levels = [];
        const queue = [root];
        let head = 0;
        if (!root) return [];

        while (head < queue.length) {
            let len = queue.length - head;
            let arr = [];
            for (let i = 0; i < len; i++) {
                const item = queue[head++];
                arr.push(item.val);
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
            levels.push(arr);
        }
        return levels;
    }
}