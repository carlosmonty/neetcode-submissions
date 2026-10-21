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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root){
            return false;
        }

        if(this.sameTree(root,subRoot))return true;

        return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
     
    
    }

    sameTree(t1,t2){
        if(!t1 && !t2) return true;
        if(!t1 || !t2 || t1.val !== t2.val) return false
        return this.sameTree(t1.left,t2.left) && this.sameTree(t1.right,t2.right)
    }
}
