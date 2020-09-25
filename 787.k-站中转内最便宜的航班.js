/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 *
 * https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/description/
 *
 * algorithms
 * Medium (36.31%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    9.7K
 * Total Submissions: 26.8K
 * Testcase Example:  '3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1'
 *
 * 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。
 * 
 * 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。
 * 如果没有这样的路线，则输出 -1。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * 输出: 200
 * 解释: 
 * 城市航班图如下
 * 
 * 
 * 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
 * 
 * 示例 2：
 * 
 * 输入: 
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 0
 * 输出: 500
 * 解释: 
 * 城市航班图如下
 * 
 * 
 * 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n 范围是 [1, 100]，城市标签从 0 到 n - 1.
 * 航班数量范围是 [0, n * (n - 1) / 2].
 * 每个航班的格式 (src, dst, price).
 * 每个航班的价格范围是 [1, 10000].
 * k 范围是 [0, n - 1].
 * 航班没有重复，且不存在环路
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    const memo = new Map();

    return (function dp (start, end, count) {
        if (memo.has(`${start}_${end}_${count}`)) {
            return memo.get(`${start}_${end}_${count}`);
        }
        if (count === 0) {
            const cost = flights.map(ele=> {
                if (ele[0] === start && ele[1] === end) {
                    return ele[2];
                }
                return -1;
            });
            const res = cost.filter(item=> item !== -1);
            return res.length > 0 ? Math.min(...res) : -1;
        }

        const target = flights.filter(ele=> ele[1] === end);
        const cost = [];

        while (target.length > 0) {
            const cur = target.pop();
            if (cur[0] === start) {
                cost.push(cur[2]);
            } else {
                memo.set(`${start}_${cur[0]}_${count - 1}`, dp(start, cur[0], count - 1));
                const result = memo.get(`${start}_${cur[0]}_${count - 1}`);
                if (result !== -1) cost.push(cur[2] + result);
            }
        }
        const res = cost.filter(item=> item !== -1);
        return res.length > 0 ? Math.min(...res) : -1;
    })(src, dst, K);
};
// @lc code=end

