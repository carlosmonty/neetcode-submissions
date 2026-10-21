class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = false;
        let result = new Array(nums.length).fill(0);
        for(let i = 0; i<nums.length;i++){
            let val = nums[i];
            if(result[val] == 0 || result[val] == undefined){
                result[val] +=1;
            }
            else{
                result[val] +=1;
                return true;
            }
        }
       return res
    }
}
