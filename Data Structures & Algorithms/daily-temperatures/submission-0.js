class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let output = new Array(temperatures.length).fill(0);
        for(let i = 0; i < temperatures.length; ++i){
            let count = 1;
            let j = i+1;
            while(j<temperatures.length){
                if (temperatures[j] > temperatures[i]) {
                    break;
                }
                j++;
                count++;
            }  
            count = j === temperatures.length?0:count 
            output[i]= count

        }
        return output;
    }
    
}
