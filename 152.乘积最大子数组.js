/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (40.29%)
 * Likes:    764
 * Dislikes: 0
 * Total Accepted:    94.4K
 * Total Submissions: 234.3K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length < 2) return nums[0];
    const len = nums.length;
    const dp = new Array(len);

    for (let i = 0; i < len; i++) {
        dp[i] = new Array(2);
    }
    // base case
    dp[0][0] = nums[0];
    dp[0][1] = nums[0];
    let res = nums[0];

    // dp counting
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i]);
        dp[i][1] = Math.min(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i]);

        res = Math.max(res, dp[i][0]);
    }
    return res;
};
// @lc code=end

