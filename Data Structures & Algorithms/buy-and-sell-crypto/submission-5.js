class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let maxProfit = 0;
        for(let sell = 1;sell<prices.length;++sell){
            if(prices[sell]<prices[buy]){
                buy =sell;
            }
            else{
                let profit = prices[sell]-prices[buy]
                console.log(profit)
                maxProfit = Math.max(maxProfit,profit)
            }
        }
        return maxProfit
    }
}
