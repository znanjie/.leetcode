/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (37.89%)
 * Likes:    650
 * Dislikes: 0
 * Total Accepted:    94.3K
 * Total Submissions: 236.1K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 暴力解法=>备忘录
var coinChange = function(coins, amount) {
    var memo = [];
    return (function dp(n) {
        if (n < 0) return -1;
        if (n === 0) return 0;
        if (memo[n]) return memo[n];
        let res = Infinity;

        for (const coin of coins) {
            let sub = dp(n - coin);
            if (sub === -1) continue;
            res = Math.min(res, 1 + sub);
        }
        memo[n] = res !== Infinity ? res : -1;
        return memo[n];
    })(amount);
};
// @lc code=end

