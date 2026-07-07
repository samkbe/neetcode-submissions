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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let list3 = new ListNode();
        let head = list3;

        while (list1) {
            list3.next = new ListNode();
            list3 = list3.next;
            if (list2 && list2.val < list1.val) {
                list3.val = list2.val;
                list2 = list2.next;
            } else {
                list3.val = list1.val;
                list1 = list1.next;
            }
        }
        if (list2) {
            list3.next = list2;
        }
        return head.next;
    }
}

//     |
//_ -> 1 ->

// |
//[1,2,4]

// |
//[3,5,6,7]

