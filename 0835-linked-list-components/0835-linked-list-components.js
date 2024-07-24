/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
    if(!head) return head
    
    let count = 0
    let curr = head
    let set = new Set(nums)

    while (curr) {
        if (set.has(curr.val) && (curr.next == null || !set.has(curr.next.val))) {
            count++
        }
        curr = curr.next
    }
    return count
};