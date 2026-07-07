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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //Find center of the list
        let fast = head;
        let slow = head;
        let answer = head;

        while (fast && fast.next && fast.next?.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let reversePointer = slow.next;
        slow.next = null;

        let prev = null;
        while (reversePointer) {
            let temp = reversePointer.next;
            reversePointer.next = prev;
            prev = reversePointer;
            reversePointer = temp;
        }

        let firstListHead = head;
        let secondListHead = prev;

        while (secondListHead) {
            let firstListTemp = firstListHead.next;
            let secondListTemp = secondListHead.next;

            firstListHead.next = secondListHead;
            secondListHead.next = firstListTemp;

            firstListHead = firstListTemp;
            secondListHead = secondListTemp;
        }
        
        return answer;
    }
}