class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        // 1. calculate the square of each index
        // 2. push into new array with curr pointer if greatest ']

        let result = new Array(nums.length).fill(0);

        let left = 0;
        let right = nums.length - 1;
        let resPointer = nums.length - 1;
        while (left <= right && resPointer > -1) {
            let sqNumL = nums[left] * nums[left];
            let sqNumR = nums[right] * nums[right];
            if (sqNumL <= sqNumR) {
                result[resPointer] = sqNumR;
                right--;
            } else if (sqNumL > sqNumR) {
                result[resPointer] = sqNumL;
                left++;
            } 
            resPointer--;
        }

        return result;
    }
}
