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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        const stack = [];
        let current = root;

        while (current || stack.length) {
            while (current) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            count++;
            if (count >= k) {
                return current.val;
            }

            current = current.right;
        }

    }
}


//[8]

//        8
//       / \
//      3   10
//     / \    \
//    1   6    14
//       / \   /
//      4   7 13


