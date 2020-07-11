/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (43.26%)
 * Likes:    929
 * Dislikes: 0
 * Total Accepted:    148.8K
 * Total Submissions: 324.5K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2：
 * 
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 * 
 * 
 */

 const memo = [];
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    memo = new Array(nums.length);
    memo.fill(-1);
    console.log(memo);
    return dp(nums, 0);
};

/**
 * 自顶向下
 * @param {Number[]} nums
 * @param {Number} start
 */
function dp(nums, start) {
    if (start > nums.length - 1) {
        return 0;
    }
    // 备忘录
    if (memo[start] !== -1) return memo[start];
    memo[start] = Math.max(dp(nums, start + 1), dp(nums, start + 2) + nums[start]);
    return memo[start];
}

/**
 * 自底向上
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp = new Array(n + 2);

    dp[n] = dp[n + 1] = 0;
    for (let i = n - 1;i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], dp[i + 2] + nums[i]);
    }
    return dp[0];
};

/**
 * 自底向上
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    let dp_i=0, dp_i_1 = 0, dp_i_2 = 0;

    for (let i = n - 1; i >= 0; i--) {
        dp_i = Math.max(dp_i_1, dp_i_2 + nums[i]);
        dp_i_2 = dp_i_1;
        dp_i_1 = dp_i;
    }
    return dp_i;
};
// @lc code=end

