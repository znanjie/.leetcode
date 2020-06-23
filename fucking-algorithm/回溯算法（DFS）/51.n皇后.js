/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (66.21%)
 * Likes:    435
 * Dislikes: 0
 * Total Accepted:    45.4K
 * Total Submissions: 64.9K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自
 * 百度百科 - 皇后 ）
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const board = initBoard(n);
    const res = [];

    return (function dfs(board, row) {
        if (row === n) {
            const rowItem = [];
            for (const boardItem of board) {
                rowItem.push(boardItem.join(''));
            }
            res.push(rowItem);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isAttack(board, row, col)) continue;
            board[row][col] = 'Q';
            dfs(board, row + 1);
            board[row][col] = '.';
        }
        return res;
    })(board, 0);
};
var isAttack = function(board, row, col) {
    const n = board.length;
    // 检查列（col）冲突
    for (let i = 0; i < n; i++) {
        if (board[i][col] === 'Q') return true;
    }
    // 检查右上方冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return true;
    }
    // 检查左上方冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return true;
    }
    return false;
}
var initBoard = function(n) {
    const row = new Array(n);
    for (let i = 0; i < n; i++) {
        row[i] = new Array(n).fill('.');
    }
    return row;
}
// @lc code=end

