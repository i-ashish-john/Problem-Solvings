/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    
    function isLeaveNode(root){
        if(root && root.left == null && root.right == null) return true
        return false
    }    
    
    if(!root)   return 0
    if(isLeaveNode(root.left)){
        return root.left.val + sumOfLeftLeaves(root.right)
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};