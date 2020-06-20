/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.31%)
 * Likes:    130
 * Dislikes: 0
 * Total Accepted:    58.5K
 * Total Submissions: 87.8K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 
 * 给定 N，计算 F(N)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * 示例 3：
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 ≤ N ≤ 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 暴力解法
var fib = function(N) {
    if (n <= 0) return 0;
    if (N === 1 || N === 2) return 1;
    return fib(N - 1) + fib(N - 2);
};
// 备忘录
var fib = function(n) {
    if (n <= 0) return 0;
    var memo = [];
    return (function helper(n) {
        if (n === 1 || n === 2) return 1;
        if (memo[n] !== 0) return memo[n];
        memo[n] = helper(n - 1) + helper(n - 2);

        return memo[n];
    })(n);
}
// 带备忘录的动态规划
var fib = function(n) {
    var memo = [];
    memo[0] = 0;
    memo[1] = memo[2] = 1;
    for (var i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}
// 状态压缩
var fib = function(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    var pre = 1, cur = 1;
    for (var i = 3; i <= n; i++) {
        var sum = pre + cur;
        pre = cur;
        cur = sum;
    }
    return cur;
}
// @lc code=end

