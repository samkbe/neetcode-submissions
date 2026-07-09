/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let dummy = new ListNode(0);
        let cur = dummy;

        while (cur) {
            let min = Infinity;
            let node;
            let index;
            for (let i = 0; i < lists.length; i++) {
                let head = lists[i];
                if (head && (head.val <= min)) {
                    min = head.val;
                    node = head;
                    index = i;
                }
            }
            if (node) {
                cur.next = node;
                lists[index] = lists[index].next;
            } else {
                cur.next = null;
            }
            cur = cur.next
        }
        return dummy.next;
    }
}