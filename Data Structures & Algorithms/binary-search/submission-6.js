class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // 1. we see sorted array so that should mean binary search
        /* Logic
        ---------------------
            - get left, right, mid indices
            -- res  = -1;
            - if target if > mid then left = mid, else right = mid
            [-1,0,2,4,6,8].  mid = (l+r)/2 = 6/2 = 3    (3)/2
              l     r 
              1. 4 = 4 return m;
            
            [-1,0,2,4,6,8]. target 3
              l     m    r
              1. 3 < 4
                    m = r
                 

        */
        let result = -1;
        if(nums.length == 0){
            return -1;
        }

        let l = 0;
        let r = nums.length-1;
        let m;

        while(l<=r){
            m = l+Math.floor((r-l)/2);
            console.log(`l: ${l} m: ${m} r:${r}`)
            if(target < nums[m]){
                 r = m-1;
            }
            else if(target > nums[m]){
                l = m+1;
            }
            else{
               return m;
            }
        }

        return -1;
    }
}
