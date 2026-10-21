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
     * @return {boolean}
     */
    isBalanced(root) {
        let height = 0;
        if(!root){
            return true;
        }
        return dfs(root,height)[1]
         
    }

    
}

function dfs(root,height){
        if(!root) return [0,true]

        let left = dfs(root.left,height);
        let right = dfs (root.right,height);
        let x = true;
        if(Math.abs(left[0]-right[0])>1 || !left[1] || !right[1]){
          x = false
        }

        return  [Math.max(left[0],right[0])+1,x]
    }
