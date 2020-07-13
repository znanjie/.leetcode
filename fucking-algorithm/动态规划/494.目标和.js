/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 *
 * https://leetcode-cn.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (43.60%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    34.1K
 * Total Submissions: 76.7K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或
 * -中选择一个符号添加在前面。
 * 
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums: [1, 1, 1, 1, 1], S: 3
 * 输出：5
 * 解释：
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 
 * 一共有5种方法让最终目标和为3。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 数组非空，且长度不会超过 20 。
 * 初始的数组的和不会超过 1000 。
 * 保证返回的最终结果能被 32 位整数存下。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    const memo = new Map();

    return (function dp(i, target) {
        if (i === nums.length) {
            return target === 0 ? 1 : 0;
        }
        if (memo.has(`${i}_${target}`)) {
            return memo.get(`${i}_${target}`);
        }
        // 给 nums[i] 赋予 -
        const dp_min = dp(i + 1, target + nums[i]);
        // 给 nums[i] 赋予 +
        const dp_plus = dp(i + 1, target - nums[i]);
        const res = dp_min + dp_plus;

        memo.set(`${i}_${target}`, res);
        return res;
    })(0, S);
};
// @lc code=end

