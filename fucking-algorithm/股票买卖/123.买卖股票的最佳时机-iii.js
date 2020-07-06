/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (41.52%)
 * Likes:    431
 * Dislikes: 0
 * Total Accepted:    41.5K
 * Total Submissions: 95.4K
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 示例 1:
 * 
 * 输入: [3,3,5,0,0,3,1,4]
 * 输出: 6
 * 解释: 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
 * 随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4,5]
 * 输出: 4
 * 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。   
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 
 * 示例 3:
 * 
 * 输入: [7,6,4,3,1] 
 * 输出: 0 
 * 解释: 在这个情况下, 没有交易完成, 所以最大利润为 0。
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    if (n < 1) return 0;
    const dp = new Array();

    for (let i = 0; i < n; i++) {
        dp[i] = new Array();
        for (let k = 0; k <= 2; k++) {
            dp[i][k] = new Array();
        }
    }

    // dp[天数][卖出的次数][当前是否持股]
    dp[0][0][0] = 0; // 第一天休息
    dp[0][0][1] = -prices[0]; // 第一天买入
    // 第一天不可能卖出
    dp[0][1][0] = -Infinity;
    dp[0][2][0] = -Infinity;
    // 第一天持股不可能卖出
    dp[0][1][1] = -Infinity;
    dp[0][2][1] = -Infinity;

    for (let i = 1; i < n; i++) {
        dp[i][0][0] = 0; // 无任何操作
        // 持股，未卖出过，可能是之前买，可能是今天买
        dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][0][0] - prices[i]);//dp[i][1][0]=max(dp[i-1][0][0]-prices[i],dp[i-1][1][0])
        // 未持股，卖出过一次，可能是之前卖，可能是今天卖
        dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][0][1] + prices[i]);//dp[i][0][1]=max(dp[i-1][1][0]+prices[i],dp[i-1][0][1])
        // 未持股，卖出过两次，可能是之前卖，可能是今天卖
        dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][1][1] + prices[i]);//dp[i][0][2]=max(dp[i-1][1][1]+prices[i],dp[i-1][0][2])
        // 持股，卖出过一次，可能是之前买，可能是今天买
        dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][1][0] - prices[i]);//dp[i][1][1]=max(dp[i-1][0][1]-prices[i],dp[i-1][1][1])
        // 持股卖出两次=>不可能事件
        dp[i][2][1] = -Infinity;
    }
    return Math.max(dp[n - 1][1][0], dp[n - 1][2][0], 0);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //第一次 买入， 卖出的利润
    let profit_1_in = -prices[0], profit_1_out = 0;
    //继第一次之后，第二次买入卖出的利润
    let profit_2_in = -prices[0], profit_2_out = 0;
    let n = prices.length;
    for (let i = 1; i < n; i++){
        profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
        //第二次买入后的利润， 第一次卖出的利润 - prices[i]
        profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
        profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
        //第一次买入后，利润为 -prices[i]
        profit_1_in = Math.max(profit_1_in, -prices[i]);
    }
    return profit_2_out;
};
// @lc code=end

