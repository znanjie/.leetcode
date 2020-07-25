/*
 * @lc app=leetcode.cn id=546 lang=javascript
 *
 * [546] 移除盒子
 *
 * https://leetcode-cn.com/problems/remove-boxes/description/
 *
 * algorithms
 * Hard (49.31%)
 * Likes:    124
 * Dislikes: 0
 * Total Accepted:    3.4K
 * Total Submissions: 6.7K
 * Testcase Example:  '[1,3,2,2,2,3,4,3,1]\r'
 *
 * 给出一些不同颜色的盒子，盒子的颜色由数字表示，即不同的数字表示不同的颜色。
 * 你将经过若干轮操作去去掉盒子，直到所有的盒子都去掉为止。每一轮你可以移除具有相同颜色的连续 k 个盒子（k >= 1），这样一轮之后你将得到 k*k
 * 个积分。
 * 当你将所有盒子都去掉之后，求你能获得的最大积分和。
 * 
 * 示例 1：
 * 输入:
 * 
 * 
 * [1, 3, 2, 2, 2, 3, 4, 3, 1]
 * 
 * 
 * 输出:
 * 
 * 
 * 23
 * 
 * 
 * 解释:
 * 
 * 
 * [1, 3, 2, 2, 2, 3, 4, 3, 1] 
 * ----> [1, 3, 3, 4, 3, 1] (3*3=9 分) 
 * ----> [1, 3, 3, 3, 1] (1*1=1 分) 
 * ----> [1, 1] (3*3=9 分) 
 * ----> [] (2*2=4 分)
 * 
 * 
 * 
 * 
 * 提示：盒子的总数 n 不会超过 100。
 * 
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    return (function dfs(arr, res) {
        if (arr.length === 0) return res;

        let all = [];
        for (let i = 0; i < arr.length; i++) {
            let count = 1;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] === arr[j + 1]) count++;
                else break;
            }
            const start = arr.slice(0, i);
            const end = arr.slice(i + count);
            i = i + count - 1;
            all.push(dfs([...start, ...end], res + count * count));
        }
        return Math.max(...all);
    })(boxes, 0)
};
// @lc code=end

