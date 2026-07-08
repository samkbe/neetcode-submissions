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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = 1;
        let secondHead = new ListNode(0, head);
        let dummy = secondHead;

        while (head) {
            if (count > n) {
                secondHead = secondHead.next;
            }
            head = head.next;
            count++;
        }

        secondHead.next = secondHead.next.next;

        return dummy.next;
    }
}

//count=3
//n=2

//             |     |
//[d,1,2,3,4,5,6,7,8]

//count = 2
//n=2

// |   |
//[_,1,2]


// | |
//[_,1]