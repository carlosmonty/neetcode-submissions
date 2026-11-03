class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;

        if (nums.length == 0) {
            return 0;
        }

        /*
            [ 3 , 3 , 2, 2]
                l r
            temp. = 3

        */

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            // console.log(`l: ${nums[left]}  r: ${nums[right]}`)
            if (nums[right] == val) {
                // already at end of arr
                right--;
            }
            if (nums[left] != val) {
                k++;
                left++;
            } else if (nums[left] == val) {
                let temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                right --;
            }
            // console.log(nums)
        }


        return k;
    }
}
