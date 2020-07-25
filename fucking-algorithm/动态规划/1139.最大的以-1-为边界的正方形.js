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
var largest1BorderedSquare = function (grid) {
    const col = grid.length; // 宽
    const row = grid[0].length; // 长
    if (col === 0 || row === 0) return 0;
    let flag1 = false, flag2 = false, maxLen = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; i < col; j++) {
            if (grid[i][j] === 1) {
                flag1 = true;
                let curLen = maxLen;
                while (i + curLen < col && j + curLen < row) {
                    flag2 = true;
                    // 如果‘左边界‘有0， 那么检查下一个点
                    for (let a = i; a < i + curLen + 1; a++) {
                        if (grid[a][j] !== 1) {
                            flag1 = false;
                            break;
                        }
                    }
                    if (!flag1) break;
                    // 如果‘上边界‘有0， 那么检查下一个点
                    for (let b = j; b < j + curLen + 1; b++) {
                        if (grid[i][b] !== 1) {
                            flag1 = false;
                            break;
                        }
                    }
                    if (!flag1) break;
                    // 如果’右边界’有0， 那么继续在这一点，检查边长+1的正方形
                    for (let a = i; a < i + curLen + 1; a++) {
                        if (grid[a][j + curLen] !== 1) {
                            curLen += 1;
                            flag2 = true;
                            break;
                        }
                    }
                    if (!flag2) continue;
                    // 如果’下边界’有0， 那么继续在这一点，检查边长+1的正方形
                    for (let b = j; b < j + curLen + 1; b++) {
                        if (grid[i + curLen][b] !== 1) {
                            curLen += 1;
                            flag2 = true;
                            break;
                        }
                    }
                    if (!flag2) continue;
                    curLen += 1;
                    maxLen = curLen;
                }
            }
        }
    }

    return maxLen * maxLen;
};

// [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
// ]
var largest1BorderedSquare = function (grid) {
    let maxSide = 0;
    const yMax = grid.length, xMax = grid[0].length;
    const dp = [...new Array(yMax + 1)].map(item => ([...new Array(xMax + 1)]).map(item => ([0, 0])))

    for (let j = 1; j <= yMax; j++) {
        for (let i = 1; i <= xMax; i++) {
            if (grid[j - 1][i - 1] == 1) {
                dp[j][i][0] = dp[j][i - 1][0] + 1
                dp[j][i][1] = dp[j - 1][i][1] + 1
                let sideLength = Math.min(dp[j][i][0], dp[j][i][1])
                while (sideLength > 1) {
                    if (dp[j][i - sideLength + 1][1] >= sideLength && dp[j - sideLength + 1][i][0] >= sideLength) break;

                    sideLength -= 1
                }
                maxSide = Math.max(sideLength, maxSide)
            }
        }
    }

    console.log(dp);
    return maxSide * maxSide;
};

console.log(largest1BorderedSquare([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
// @lc code=end

