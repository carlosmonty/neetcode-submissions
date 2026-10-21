class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length-1
        let min = nums[0];
        while(l<=r){
            let m = l+Math.floor((r-l)/2);
            if(nums[m]<min){
                r = m-1
            }
            else{
                l = m+1
            }
            min = Math.min(min,nums[m])
        }
        return min
    }
}
