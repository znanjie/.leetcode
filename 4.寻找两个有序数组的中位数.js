/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (36.26%)
 * Likes:    1703
 * Dislikes: 0
 * Total Accepted:    107.8K
 * Total Submissions: 297.4K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var sub = nums1.concat(nums2);
    var mid = parseInt((nums1.length + nums2.length) / 2);
    var isOdd = (nums1.length + nums2.length) % 2 === 0;

    sub.sort((a, b)=> a - b);
    if (!isOdd) {
        return sub[mid].toFixed(1);
    } else {
        return ((sub[mid - 1] + sub[mid]) / 2).toFixed(1);
    }
};
// @lc code=end