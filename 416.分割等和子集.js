/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 *
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (45.61%)
 * Likes:    328
 * Dislikes: 0
 * Total Accepted:    40.1K
 * Total Submissions: 82.9K
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 注意:
 * 
 * 
 * 每个数组中的元素不会超过 100
 * 数组的大小不会超过 200
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1, 5, 11, 5]
 * 
 * 输出: true
 * 
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 * 
 * 
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1, 2, 3, 5]
 * 
 * 输出: false
 * 
 * 解释: 数组不能分割成两个元素和相等的子集.
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 状态定义：dp[i][j]表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j
    // 边界
    const len = nums.length;
    if (len === 0) return false;
    const sum = nums.reduce((acc, cur)=> acc + cur);
    if (sum % 2 === 1) return false;
    const target = sum / 2; // 分成两个子集
    const dp = new Array(len + 1); // 行：元素索引
    // base case
    for (let i = 0; i <= len; i++) {
        dp[i] = new Array(target + 1); //列：容量（包括 0）
        dp[i][0] = true; // 背包没有空间的时候，就相当于装满了
    }
    for (let j = 1; j <= target; j++) {
        dp[0][j] = false; // 没有物品可选择的时候，肯定没办法装满背包
    }

    for (let k = 1; k <= len; k++) {
        for (let l = 1; l <= target; l++) {
            if (l < nums[k - 1]) {
                // 背包容量不足，不能装下第 i 个物品
                dp[k][l] = dp[k - 1][l];
            } else {
                // 不装 or 装
                dp[k][l] = dp[k - 1][l] || dp[k - 1][l - nums[k - 1]];
            }
        }
    }
    return dp[len][target];
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const len = nums.length;
    if (len === 0) return false;
    const sum = nums.reduce((acc, cur)=> acc + cur);
    if (sum % 2 === 1) return false;
    const target = sum / 2; // 分成两个子集
    const dp = new Array(target + 1);
    dp.fill(false);
    dp[0] = true;

    for (let i = 0; i < len; i++) {
        for (let j = target; j >= 0; j--) {
            if (j >= nums[i]) {
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
    }
    return dp[target];
}
// @lc code=end
