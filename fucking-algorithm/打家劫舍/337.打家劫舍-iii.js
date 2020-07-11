/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 *
 * https://leetcode-cn.com/problems/house-robber-iii/description/
 *
 * algorithms
 * Medium (55.97%)
 * Likes:    413
 * Dislikes: 0
 * Total Accepted:    36.2K
 * Total Submissions: 62.9K
 * Testcase Example:  '[3,2,3,null,3,null,1]'
 *
 * 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。
 * 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
 * 
 * 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3,null,3,null,1]
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  2   3
 * ⁠   \   \ 
 * ⁠    3   1
 * 
 * 输出: 7 
 * 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
 * 
 * 示例 2:
 * 
 * 输入: [3,4,5,1,3,null,1]
 * 
 * 3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \   \ 
 * ⁠1   3   1
 * 
 * 输出: 9
 * 解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (root === null) return 0;

    let do_it = root.val
    if (root.left !== null) {
        do_it += rob(root.left.left) + rob(root.left.right);
    }
    if (root.right !== null) {
        do_it += rob(root.right.left) + rob(root.right.right);
    }

    let do_not = rob(root.left) + rob(root.right);

    res = Math.max(do_it, do_not);

    return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* 返回一个大小为 2 的数组 arr
arr[0] 表示不抢 root 的话，得到的最大钱数
arr[1] 表示抢 root 的话，得到的最大钱数 */
function dp(root) {
    if (root === null) return [0, 0];

    const left = dp(root.left);
    const right = dp(root.right);

    const do_not = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    const do_it = root.val + left[0] + right[0];

    return [do_not, do_it];
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    const res = dp(root);

    return Math.max(res[0], res[1]);
}
// @lc code=end

