class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  
    maxArea(heights) {
        let max = 0;
        for(let i = 0;i<heights.length;++i){
            for(let j = heights.length-1;j>i;--j){
                let height = Math.min(heights[i],heights[j])
                let length = j-i;
                let area = height*length
                max = Math.max(max,area)
            }
        }
        return max
    }
}
