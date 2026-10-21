class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    //    [10,1,5,6,7,1] buy = 1 sell = 1 maxProfit = 6
        let buy = 0;
        let maxProfit = 0;
        for(let sell = 1;sell<prices.length;++sell){
            if(prices[buy]>prices[sell]){
                buy = sell;
            }
            else{
                let profit = (prices[sell]-prices[buy])
                maxProfit = Math.max(maxProfit,profit)
            }
        }
        return maxProfit
    }
}
