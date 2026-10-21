class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenMap = new Map();
        nums = nums.sort((a,b)=> a-b)

        for(let num of nums){
            if(!seenMap.has(num)){
                seenMap.set(num)
            }else{
                return true
            }
        }
        return false;
        //sort nums asc 
        //1. traverse nums O(n)
        //2. if map has num return true else push to map
    }
}
