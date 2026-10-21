class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let map = new Map();
        for(let i = 0; i < nums.length;++i){
            if(map.get(nums[i])){
                
                map.set(nums[i],map.get(nums[i])+1)
                return nums[i]
            }
            else{
                 map.set(nums[i],1)
            }
           
        }

        console.log(map)
        
    }
}
