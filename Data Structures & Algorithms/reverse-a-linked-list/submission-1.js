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
     * @return {ListNode}
     */
    reverseList(head) {

        let prev = null;

        while (head) {
            let temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }
        return prev;
    }
}


//temp = null
//prev = 4
//

//                |
//[1 -> 2 -> 3 -> 4]
//null, 1    2    3
//prev = 1
//

//[]