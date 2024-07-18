/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    if(!head || !head.next) return null
    let n = 0
    let curr = head
    while (curr) {
        n++
        curr = curr.next
    }

    let sec = head
    for (let i = 1; i < Math.floor(n/2); i++) {
        sec = sec.next
    } 

    sec.next = sec.next.next
    return head
};