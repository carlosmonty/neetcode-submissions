class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  
    maxArea(heights) {
        let max = 0;
        let i = 0;
        let j = heights.length-1;
        while(i<j){
            let area = Math.min(heights[i],heights[j]) * (j-i)
            max = Math.max(max,area)
            if(heights[i] > heights[j]){
                --j;
            }
            else{
                i++;
            }
        }
       
        // for(let i = 0;i<heights.length;++i){
            // for(let j = heights.length-1;j>i;--j){
            //     let height = Math.min(heights[i],heights[j])
            //     let length = j-i;
            //     let area = height*length
            //     max = Math.max(max,area)
            // }
        // }
        return max
    }
}
