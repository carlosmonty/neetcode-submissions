class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //[3,4,5,6,1,2] l =1, r=2, m= 
        let l = 0;
        let r = nums.length-1
    
        while(l<=r){
            let m = Math.floor((l+r)/2);
            console.log(`l: ${nums[l]} m: ${nums[m]} r: ${nums[r]}`)
            if(nums[m]==target){
                return m;
            }
            else if(nums[l]<=nums[m]){
                if(target>nums[m] || target<nums[l]){
                    l = m+1;
                }
                else{
                    r = m-1;
                }
            }
            else{
                if(target<nums[m] || target>nums[r]){
                    r = m-1;
                }
                else{
                    l = m +1;
                }
            }
        }
        return -1;
    }
}
