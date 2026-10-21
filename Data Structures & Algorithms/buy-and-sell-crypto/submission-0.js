class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let profit  = 0;
       
        while(j<prices.length){
                    
            if(prices[j]>prices[i]){
              let val = Math.floor(prices[j]-prices[i])
                profit = Math.max(profit,val)
                
            }else{
                
                i= j;
            }
            j++;

        }
        return profit
    }
}
