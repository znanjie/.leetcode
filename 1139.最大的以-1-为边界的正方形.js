/*
 * @lc app=leetcode.cn id=1139 lang=javascript
 *
 * [1139] 最大的以 1 为边界的正方形
 *
 * https://leetcode-cn.com/problems/largest-1-bordered-square/description/
 *
 * algorithms
 * Medium (41.51%)
 * Likes:    38
 * Dislikes: 0
 * Total Accepted:    5.1K
 * Total Submissions: 11.4K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回
 * 0。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：9
 * 
 * 
 * 示例 2：
 * 
 * 输入：grid = [[1,1,0,0]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= grid.length <= 100
 * 1 <= grid[0].length <= 100
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const col = grid.length; // 宽
    const row = grid[0].length; // 长

    for (let i = 0; i < row; i++) {
        for (let j = 0; i < col; j++) {
            if (grid[i][j] === 1) {
                
            }
        }
    }
};

// [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
// ]
// @lc code=end

