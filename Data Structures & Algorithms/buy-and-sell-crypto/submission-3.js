class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let maxProfit = 0;
    //  prices=[2,1,2,1,0,1,2]
        while(sell<prices.length){

            if(prices[buy]>prices[sell]){
                buy = sell
            }
            else{
                maxProfit = Math.max(maxProfit,(prices[sell]-prices[buy]))
            }
            sell++;
        }
        return maxProfit;

    }
}
