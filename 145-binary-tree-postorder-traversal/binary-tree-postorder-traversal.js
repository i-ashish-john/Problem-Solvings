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
var postorderTraversal = function(root) {
    //create a array to store the values
    let  arr = []

    function postOrderTraversal(root,arr){
        //if the root is empty  after somany recurtion calls we return arr
         if(!root){
        return arr
    }
    //after that we call the left and right arr values
    postOrderTraversal(root.left,arr)
    postOrderTraversal(root.right,arr)
    arr.push(root.val)

    }
   postOrderTraversal(root,arr)
    return arr
};