/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (66.67%)
 * Likes:    599
 * Dislikes: 0
 * Total Accepted:    107.9K
 * Total Submissions: 161.8K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 
 * 
 * 
 * 例如，给定三角形：
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 
 * 
 * 说明：
 * 
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m = triangle.length;
    const n = triangle[m - 1].length;
    const dp = new Array(m);

    // base case
    dp[m - 1] = new Array();
    for (let i = 0; i < n; i++) {
        dp[m - 1][i] = triangle[m - 1][i];
    }

    // dp counting
    for (let i = m - 2; i >= 0 ; i--) {
        dp[i] = new Array();
        for (let j = 0; j < triangle[i].length; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j], dp[i+1][j+1]);
        }
    }

    return dp[0][0];
};
// @lc code=end

