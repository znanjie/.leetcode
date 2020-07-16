/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (49.53%)
 * Likes:    2177
 * Dislikes: 0
 * Total Accepted:    278K
 * Total Submissions: 537.4K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;

    const dp = new Array(nums.length);
    dp[0] = nums[0]; // base case
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    }
    return Math.max(...dp);
};

/**
 * 动态规划空间压缩
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let max = -Infinity;
    let dp_0 = nums[0], dp_1 = 0;
    max = dp_0;

    for (let i = 1; i < nums.length; i++) {
        dp_1 = Math.max(nums[i], nums[i] + dp_0);
        dp_0 = dp_1;
        max = Math.max(max, dp_1);
    }
    return max;
};
// @lc code=end

