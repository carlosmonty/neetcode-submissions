class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length;
        let result = new Array(len);
        for(let i = 0;i<len;i++){
            let remove = nums[i]==0?1:nums[i];
            let value = nums[i]==0?1:nums[i];
           
            for(let j = 0;j<len;j++){
                if(i == j){

                }
                else{
                     
                  value *=nums[j]
                  
                }
            }
            value = value/remove
            result[i] = value
          
                       
        }
   return result
    }
}
