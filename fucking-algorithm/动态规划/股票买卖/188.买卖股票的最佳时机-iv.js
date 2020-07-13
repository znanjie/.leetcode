/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (29.32%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    23K
 * Total Submissions: 76.9K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 示例 1:
 * 
 * 输入: [2,4,1], k = 2
 * 输出: 2
 * 解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,6,5,0,3], k = 2
 * 输出: 7
 * 解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4
 * 。
 * 随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_k_inf = function(prices) {
    const n = prices.length;
    if (n < 1) return 0;
    let dp_i_0 = 0, dp_i_1 = -prices[0];

    for (let i = 1; i < n; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
    }
    return dp_i_0;
};
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    if (n < 1) return 0;
    if (k > n / 2) return maxProfit_k_inf(prices);

    const dp = new Array();
    for (let i = 0; i < n; i++) {
        dp[i] = new Array();
        for (let j = 0; j <= k; j++) {
            dp[i][j] = new Array();
        }
    }
    /* base case start */
    // dp[天数][卖出的次数][当前是否持股]
    dp[0][0][0] = 0; // 第一天休息
    dp[0][0][1] = -prices[0]; // 第一天买入

    for (let i = 1; i < n; i++) {
        dp[i][0][0] = 0; // 一直保持不操作
        // 第 i 天，0笔交易但持股，要么是之前持股，要么是今天持股
        dp[i][0][1] = Math.max(dp[i - 1][0][1], -prices[i]);
    }
    for (let i = 1; i <= k; i++) {
        dp[0][i][0] = -Infinity; // 第一天不可能卖出
        dp[0][i][1] = -Infinity; // 第一天持股不可能卖出
    }
    /* base case end */
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            // 第 i 天，j 笔交易，未持股，可能是之前未持有，也可能是今天未持有
            dp[i][j][0] = Math.max(dp[i-1][j][0],dp[i-1][j-1][1]+prices[i])
            // 第 i 天，j 笔交易，持股，可能是之前持有，也可能是今天未持有
            dp[i][j][1] = Math.max(dp[i-1][j][1],dp[i-1][j][0]-prices[i])
        }
    }
    let max = 0;
    for (let i = 0; i <= k; i++) {
        max = Math.max(dp[n - 1][i][0], max);
    }
    return max;
};
// @lc code=end

