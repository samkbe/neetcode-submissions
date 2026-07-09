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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let cur = dummy;
        let carryOver = 0;

        while (l1 || l2) {            
            let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carryOver;
            carryOver = Math.floor(sum / 10);
            sum = sum % 10;
            cur.next = new ListNode(sum);
            cur = cur.next;
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }
        if (carryOver) { 
            cur.next = new ListNode(carryOver);
        }

        return dummy.next;
    }
}