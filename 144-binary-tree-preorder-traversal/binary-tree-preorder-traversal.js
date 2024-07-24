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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root){
        return [];
    }
    let arr = [];
    function dfs(node){
        arr.push(node.val);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    dfs(root);
    return arr;
};