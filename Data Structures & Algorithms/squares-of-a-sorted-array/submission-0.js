class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        // 1. calculate the square of each index
        // 2. push into new array with curr pointer if greatest ']

        let result = new Array(nums.length).fill(0);

        for (let i = 0; i < nums.length; i++) {
            let sqNum = nums[i] * nums[i] ;
            result[i] = sqNum
        }


        return result.sort((a,b)=>a-b);
    }
}
