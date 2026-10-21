class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length-1;


        while(i<j){
            if(numbers[i]==numbers[j]){
                break;
            }
            if(numbers[i]>=numbers[j]){
                break;
            }
            else{
                
                const sum = numbers[i]+numbers[j];
                console.log(`i = ${i}  j = ${j} sum = ${sum}`)
                // sum = 5 and target = 3
                if(sum < target){ 
                    ++i;
                }
                else if(sum > target){
                    --j;
                }
                else{
                    return [i+1,j+1]
                }
            }
        }

    }
}
