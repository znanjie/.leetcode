/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除与获得点数
 *
 * https://leetcode-cn.com/problems/delete-and-earn/description/
 *
 * algorithms
 * Medium (50.79%)
 * Likes:    162
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 12.9K
 * Testcase Example:  '[3,4,2]'
 *
 * 给定一个整数数组 nums ，你可以对它进行一些操作。
 * 
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i]
 * + 1 的元素。
 * 
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [3, 4, 2]
 * 输出: 6
 * 解释: 
 * 删除 4 来获得 4 个点数，因此 3 也被删除。
 * 之后，删除 2 来获得 2 个点数。总共获得 6 个点数。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [2, 2, 3, 3, 3, 4]
 * 输出: 9
 * 解释: 
 * 删除 3 来获得 3 个点数，接着要删除两个 2 和 4 。
 * 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
 * 总共获得 9 个点数。
 * 
 * 
 * 注意:
 * 
 * 
 * nums的长度最大为20000。
 * 每个整数nums[i]的大小都在[1, 10000]范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    return (function dfs(arr, res) {
        if (arr.length === 0) return res;
        if (arr.length === 1) return arr[0] + res;
        let all = [];
        for (let i = 0; i < arr.length; i++) {
            const deleteArr = arr.filter((item, index)=> {
                if (item === arr[i] + 1 || item === arr[i] - 1) return false;
                if (index === i && item === arr[i]) return false;
                return true;
            });

            all.push(dfs(deleteArr, arr[i] + res));
        }
        return Math.max(...all);
    })(nums, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const maxNum = Math.max(...nums);
    const transform = new Array(maxNum + 1).fill(0);
    nums.forEach(item=> {
        transform[item] = transform[item] ? transform[item] + 1 : 1;
    });

    let dp_i = 0, dp_i_1 = 0, dp_i_2 = 0;
    for (let i = maxNum; i >= 0; i--) {
        dp_i = Math.max(dp_i_1, dp_i_2 + transform[i] * i);
        dp_i_2 = dp_i_1;
        dp_i_1 = dp_i;
    }
    return dp_i;
};

// console.log(deleteAndEarn([3,7,10,5,2,4,8,9,9,4,9,2,6,4,6,5,4,7,6,10]));
// deleteAndEarn([2, 2, 3, 3, 3, 4]);
// @lc code=end

