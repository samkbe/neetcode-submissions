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
            let tempHead = head;
            for (let i = 0; i < len; i++) {
                const item = queue[head++];
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
            rightSide.push(queue[tempHead + len - 1].val);
        }

        return rightSide;
    }
}
