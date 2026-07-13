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
     * @return {number[]}
     */
    rightSideView(root) {
        const queue = [root];
        let head = 0;
        const rightSide = [];
        if (!root) return [];

        while (head < queue.length) {
            let len = queue.length - head;
            for (let i = 0; i < len; i++) {
                const item = queue[head++];
                if (i === len - 1) rightSide.push(item.val);
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
        }
        return rightSide;
    }
}
