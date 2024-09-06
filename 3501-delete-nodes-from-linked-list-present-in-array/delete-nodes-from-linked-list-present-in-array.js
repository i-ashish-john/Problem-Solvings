/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
   nums = new Set(nums);
   let PrevHead= new ListNode(0,head)
   let prev = PrevHead
    while(prev.next){
        if(nums.has(prev.next.val)){
            prev.next = prev.next.next
        }else{
            prev=prev.next
        }
    }
    return PrevHead.next
};