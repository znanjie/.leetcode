/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 *
 * https://leetcode-cn.com/problems/coin-change-2/description/
 *
 * algorithms
 * Medium (48.28%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    19.2K
 * Total Submissions: 35.6K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: amount = 5, coins = [1, 2, 5]
 * 输出: 4
 * 解释: 有四种方式可以凑成总金额:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * 
 * 
 * 示例 2:
 * 
 * 输入: amount = 3, coins = [2]
 * 输出: 0
 * 解释: 只用面额2的硬币不能凑成总金额3。
 * 
 * 
 * 示例 3:
 * 
 * 输入: amount = 10, coins = [10] 
 * 输出: 1
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 你可以假设：
 * 
 * 
 * 0 <= amount (总金额) <= 5000
 * 1 <= coin (硬币面额) <= 5000
 * 硬币种类不超过 500 种
 * 结果符合 32 位符号整数
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const len = coins.length;
    // dp的定义：若只使用 coins 中的前 i 个硬币的面值，若想凑出金额 j，有 dp[i][j] 种凑法。
    const dp = new Array(len + 1);
    for (let j = 0; j <= len; j++) {
        dp[j] = new Array(amount + 1);
        dp[j][0] = 1; // 无为而治
    }
    for (let i = 1; i <= amount; i++) {
        dp[0][i] = 0;
    }
    dp[0][0] = 1;

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i - 1]) {
                // 当前的硬币面额选择用还是不用
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[len][amount];
};

var change = function(amount, coins) {
    const len = coins.length;
    const dp = new Array(amount + 1);
    dp.fill(0);
    dp[0] = 1;
    for (let i = 0; i < len; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                dp[j] = dp[j] + dp[j - coins[i]];
            }
        }
    }
    return dp[amount];
}
// @lc code=end

