/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let prev = head;
    head = head.next;
    let i=1;
    let index = [];
    while(head.next){
        if((prev.val < head.val && head.val > head.next.val) || (prev.val > head.val && head.val < head.next.val)){
            index.push(i);
        }
        prev = head;
        head = head.next;
        i++;
    }
    if(index.length < 2){
        return [-1, -1];
    }
    let minDistance = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<index.length-1; i++){
        minDistance = Math.min(index[i+1] - index[i], minDistance);
    }   
    return [minDistance, index[index.length-1] - index[0]];
};