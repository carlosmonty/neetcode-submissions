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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p && !q){
            return true;
        }

        if(!p || !q || p.val !== q.val){
            return false
        }
        let values1 = [];
        let values2 = [];
        let tree1 = this.dfs(p,values1)
        let tree2 = this.dfs(q,values2)
        const isEqual = (arr1, arr2) => 
  arr1.length === arr2.length && 
  arr1.every((val, index) => val === arr2[index]);
        return isEqual(values1,values2)
    }

    dfs(root,array){
        if(!root){
            array.push(-111)
            return null;
        }
        array.push(root.val)
        this.dfs(root.left,array)
        this.dfs(root.right,array)
          
    }
}
