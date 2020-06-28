/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (37.96%)
 * Likes:    474
 * Dislikes: 0
 * Total Accepted:    102.4K
 * Total Submissions: 257.6K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchLeft = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + parseInt((right - left) / 2);

        if (nums[mid] === target) {
            right = mid - 1; // 缩小右区间
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    if (left >= nums.length || nums[left] !== target) return -1;
    return left;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRight = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + parseInt((right - left) / 2);

        if (target === nums[mid]) {
            left = mid + 1; // 增大左区间
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    if (right < 0 || nums[right] !== target) return -1;
    return right;
}
// @lc code=end

