class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = new Array()
        for(let i = 0; i<nums.length;i++){
            for(let j = 1; j<nums.length;j++){
                if(i== j){
                    break;
                }
                if(nums[i]+nums[j] == target){
                    
                    if(i<j){
                        result = [i,j]
                    }
                    else{
                        result = [j,i]
                    }
                    return result;
                }

            }
        }
    }
}
