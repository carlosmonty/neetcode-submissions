class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let leftMax = height[l]
        let r = height.length-1
        let rightMax = height[r]
        let output = 0;
        while(l<r){
          if(leftMax < rightMax){
            l++;
            leftMax = Math.max(leftMax,height[l]);
            output +=leftMax - height[l]
          }
          else{
            r--;
            rightMax = Math.max(rightMax, height[r]);
            output += rightMax - height[r];
          }
        }
        return output
    }
}
