/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 *
 * https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (39.90%)
 * Likes:    267
 * Dislikes: 0
 * Total Accepted:    25.4K
 * Total Submissions: 56.9K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * 给定一个整数矩阵，找出最长递增路径的长度。
 * 
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
 * 
 * 示例 1:
 * 
 * 输入: nums = 
 * [
 * ⁠ [9,9,4],
 * ⁠ [6,6,8],
 * ⁠ [2,1,1]
 * ] 
 * 输出: 4 
 * 解释: 最长递增路径为 [1, 2, 6, 9]。
 * 
 * 示例 2:
 * 
 * 输入: nums = 
 * [
 * ⁠ [3,4,5],
 * ⁠ [3,2,6],
 * ⁠ [2,2,1]
 * ] 
 * 输出: 4 
 * 解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
// const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 左右上下
// let rows = 0, cols = 0;

var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 左右上下
    const rows = matrix.length;
    const cols = matrix[0].length;
    const memo = [...new Array(rows)].map(()=> [...new Array(cols).fill(0)])
    const dfs = (row, col)=> {
        if (memo[row][col] !== 0) return memo[row][col];
        memo[row][col]++;
        for (let i = 0; i < 4; i++) {
            const newRow = row + DIRS[i][0];
            const newCol = col + DIRS[i][1];
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && matrix[newRow][newCol] > matrix[row][col]) {
                memo[row][col] = Math.max(memo[row][col], dfs(newRow, newCol) + 1);
            }
        }
        return memo[row][col];
    }
    let ans = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ans = Math.max(ans, dfs(i, j));
        }
    }

    return ans;
};
// @lc code=end

