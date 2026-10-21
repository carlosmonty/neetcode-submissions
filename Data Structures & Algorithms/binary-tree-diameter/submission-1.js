/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
       let height = 0
    let res = [0]
    this.traverseTree(root,height,res)  
    return res[0]
    }


    traverseTree(root,height,diameter){
        if(!root){
            return 0;
        }

        let left = this.traverseTree(root.left,height,diameter)
        let right = this.traverseTree(root.right,height,diameter);
        diameter[0] = Math.max(diameter[0], left+right)
        return Math.max(left,right)+1
    }
}
