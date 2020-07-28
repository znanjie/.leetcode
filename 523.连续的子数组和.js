/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 *
 * https://leetcode-cn.com/problems/continuous-subarray-sum/description/
 *
 * algorithms
 * Medium (22.17%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    17.9K
 * Total Submissions: 80.4K
 * Testcase Example:  '[23,2,4,6,7]\n6'
 *
 * 给定一个包含 非负数 的数组和一个目标 整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，且总和为 k 的倍数，即总和为
 * n*k，其中 n 也是一个整数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[23,2,4,6,7], k = 6
 * 输出：True
 * 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6。
 * 
 * 
 * 示例 2：
 * 
 * 输入：[23,2,6,4,7], k = 6
 * 输出：True
 * 解释：[23,2,6,4,7]是大小为 5 的子数组，并且和为 42。
 * 
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 数组的长度不会超过 10,000 。
 * 你可以认为所有数字总和在 32 位有符号整数范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) return false;
    // const len = nums.length;
    const memo = new Map();

    return (function (left, right) {
        if (memo.has(`${left}_${right}`)) return memo.get(`${left}_${right}`);
        if (right - left < 2) {
            memo.set(`${left}_${right}`, false);
        }
        // TO: 状态转移
    })(0, nums.length - 1);
};

/**
 * @param {number} num
 * @param {number} k
 * @return {boolean}
 */
function isValidation(num, k) {
    const res = num / k;
    if (Number.isInteger(res) && res !== 0) return true;
    return false;
}
// @lc code=end

