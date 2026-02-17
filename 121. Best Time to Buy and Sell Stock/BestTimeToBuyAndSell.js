/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_price = prices[0];
    let max_profit = 0;
    for(let price of prices){
        if (price<min_price){
            min_price = price;
        }
        else{
            max_profit = Math.max(max_profit, price - min_price)
        }
    }
    return max_profit;
};