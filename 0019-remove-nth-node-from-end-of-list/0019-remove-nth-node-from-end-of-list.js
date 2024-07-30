/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if(!head) return head
    // also use dummy (another option)
    
    let first = head
    let length = 0

    while (first) {
        length++
        first = first.next
    }

    if(length==n){
        return head.next
    }

    let second = head
    for (i = 1; i < length - n; i++) {
        second = second.next
    }

    second.next = second.next.next
    return head
};