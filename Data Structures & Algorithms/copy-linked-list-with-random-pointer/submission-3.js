// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if (!head) return null;

        let cur = head;
        const oldToCopy = new Map();

        while (cur) {
            oldToCopy.set(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            const newVal = oldToCopy.get(cur);
            newVal.next = oldToCopy.get(cur.next) ? oldToCopy.get(cur.next) : null;
            newVal.random = oldToCopy.get(cur.random) ? oldToCopy.get(cur.random) : null;
            cur = cur.next;
        }
        return oldToCopy.get(head);
    }
}