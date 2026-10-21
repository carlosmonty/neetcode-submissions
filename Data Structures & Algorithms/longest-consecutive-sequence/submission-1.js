class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const len = nums.length
        nums.sort((a,b)=>a-b)
        let max = 0;
        for(let i = 0;i<len;++i){
        
             let subArray = new Array();
                 subArray.push(nums[i]);
            for(let j = 0; j<len;++j){
                if(nums[i] == nums[j]){
                    continue;
                }
                else{
                    if(nums[i]+1 == nums[j] || nums[j] == subArray[subArray.length - 1] + 1){
                   
                         if (!subArray.includes(nums[j])) subArray.push(nums[j]);
                    }
                }
            }
    //   console.log(subArray);
            if(subArray.length>max){
                max = subArray.length
            }
        }
        return max;
    }
}
