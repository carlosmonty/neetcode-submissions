class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right  = nums.length -1;

        while(left<=right){
            let m = left+Math.floor((right-left)/2);
            if(target < nums[m]){
                //check left
                right= m-1
            }
            else if(target>nums[m]){
                // check right
                left = m+1
            }
            else{
                return m;
            }
        }
        return -1;
    }
}
