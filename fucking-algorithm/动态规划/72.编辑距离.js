/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (56.45%)
 * Likes:    983
 * Dislikes: 0
 * Total Accepted:    70.2K
 * Total Submissions: 117.8K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 */


/**
框架
if s1[i] == s2[j]:
    啥都别做（skip）
    i, j 同时向前移动
else:
    三选一：
        插入（insert）
        删除（delete）
        替换（replace）
*/
// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const memo = new Map();
    return (function dp(i, j) {
        if (memo.has(`${i}_${j}`)) return memo.get(`${i}_${j}`);
        // base case
        if (i === -1) return j + 1;
        if (j === -1) return i + 1;

        if (word1[i] === word2[j]) {
            memo.set(`${i}_${j}`, dp(i - 1, j - 1))
            return memo.get(`${i}_${j}`); // 不动
        }
        const res = Math.min(
            dp(i, j - 1) + 1, // 插入
            dp(i - 1, j) + 1, // 删除
            dp(i - 1, j - 1) + 1 // 替换
        )
        memo.set(`${i}_${j}`, res);
        return res;
    })(word1.length - 1, word2.length - 1);
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const len1 = word1.length, len2 = word2.length;
    const dp = new Array(len1 + 1);

    for (let i = 0; i <= len1 ; i++) {
        dp[i] = new Array(len2 + 1);
        dp[i][0] = i;
    }
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = j;
    }
    // 自底向上
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, //插入
                    dp[i][j - 1] + 1, // 删除
                    dp[i - 1][j - 1] + 1 // 替换
                )
            }
        }
    }
    return dp[len1][len2];
};
// @lc code=end

