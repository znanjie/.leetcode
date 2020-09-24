/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 *
 * https://leetcode-cn.com/problems/longest-turbulent-subarray/description/
 *
 * algorithms
 * Medium (42.14%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    8K
 * Total Submissions: 18.9K
 * Testcase Example:  '[9,4,2,10,7,8,8,1,9]'
 *
 * 当 A 的子数组 A[i], A[i+1], ..., A[j] 满足下列条件时，我们称其为湍流子数组：
 * 
 * 
 * 若 i <= k < j，当 k 为奇数时， A[k] > A[k+1]，且当 k 为偶数时，A[k] < A[k+1]；
 * 或 若 i <= k < j，当 k 为偶数时，A[k] > A[k+1] ，且当 k 为奇数时， A[k] < A[k+1]。
 * 
 * 
 * 也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。
 * 
 * 返回 A 的最大湍流子数组的长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[9,4,2,10,7,8,8,1,9]
 * 输出：5
 * 解释：(A[1] > A[2] < A[3] > A[4] < A[5])
 * 
 * 
 * 示例 2：
 * 
 * 输入：[4,8,12,16]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 输入：[100]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 40000
 * 0 <= A[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    const len = A.length;
    if (len <= 1) return len;
    let res = 1, index = 0;

    for (let k = 1; k < len; k++) {
        const flag = compare(A[k - 1], A[k]);

        if (k == len - 1 || flag * compare(A[k], A[k + 1]) !== -1) {
            if (flag !== 0) {
                res = Math.max(res, k - index + 1);
            }
            index = k;
        }
    }

    return res;
};

var compare = function(a, b) {
    let res = 0;
    if (a > b) {
        res = 1;
    } else if (a < b) {
        res = -1;
    }
    return res;
}

maxTurbulenceSize([0,1,1,0,1,0,1,1,0,0]);
// @lc code=end

