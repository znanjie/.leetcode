/*
 * @lc app=leetcode.cn id=1402 lang=javascript
 *
 * [1402] 做菜顺序
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Hard (73.2%)
 * Likes:    35
 * Dislikes: 0
 * Total Accepted:    4372
 * Total Submissions: 5974
 * Testcase Example:  '[-1,-8,0,5,-7]'
 *
 * 一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。
 * 一道菜的 「喜爱时间」系数定义为烹饪这道菜以及之前每道菜所花费的时间乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。
 * 请你返回做完所有菜 「喜爱时间」总和的最大值为多少。
 * 你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。
 *
 * 示例:
 *
 * 输入: satisfaction = [-1,-8,0,5,-9]
 * 输出: 14
 * 解释: 去掉第二道和最后一道菜，最大的喜爱时间系数和为 (-1*1 + 0*2 + 5*3 = 14) 。每道菜都需要花费 1 单位时间完成。
 *
 */

// @lc code=start
/**
 * 思路：先排序，选最大的，S0 > 0; 如果要选第二道菜则需满足：S1 + 2S0 > S0 => S1 + S0 > 0;以此往后推：Sn + ... + S0 > 0 即可
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    if (satisfaction.length === 0) return 0;
    const sortMenu = satisfaction.sort((a, b)=> a - b);
    const len = sortMenu.length;

    if (sortMenu[len - 1] <= 0) return 0;
    let cur = 0;
    const count = [];
    for (let i = len - 1; i >= 0; i--) {
        if (cur + sortMenu[i] > 0) {
            cur += sortMenu[i];
            count.unshift(sortMenu[i]);
        } else {
            break;
        }
    }
    let res = 0;
    for (let i = 0; i < count.length; i++) {
        res += count[i] * (i + 1);
    }

    return res;
};
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    if (satisfaction.length === 0) return 0;
    const sortMenu = satisfaction.sort((a, b)=> b - a);

    let presum = 0, res = 0;
    for (const menu of sortMenu) {
        if (presum + menu > 0) {
            presum += menu;
            res += presum;
        } else {
            break;
        }
    }
    return res;
}
console.log(maxSatisfaction([-1,-8,0,5,-9]));
console.log(maxSatisfaction([4,3,2]));
console.log(maxSatisfaction([-1,-4,-5]));
console.log(maxSatisfaction([-2,5,-1,0,3,-3]));
// @lc code=end

