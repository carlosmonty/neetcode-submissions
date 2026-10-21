class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const len = nums.length
        let map = new Map(); //insert each sub array find largest len later
        nums.sort((a,b)=>a-b)
        let max = 0;
        for(let i = 0;i<len;++i){
            let count = 0;
             let subArray = new Array();
                 subArray.push(nums[i]);
            for(let j = 0; j<len;++j){
                // console.log(`i: ${nums[i]} j: ${nums[j]}`);
                if(nums[i] == nums[j]){
                    continue;
                }
                else{
                    if(nums[i]+1 == nums[j] || nums[j] == subArray[subArray.length - 1] + 1){
                        count+=1
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
