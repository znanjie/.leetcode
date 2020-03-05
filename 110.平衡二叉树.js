/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (49.16%)
 * Likes:    248
 * Dislikes: 0
 * Total Accepted:    54.2K
 * Total Submissions: 107.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
 * 
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
 * 自顶向下
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;

    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
function maxDepth(root) {
    if (root === null) return -1;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

/* ===== 分割线 ===== */
/**
 * 自底向上遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeInfo(height, balance) {
    this.height = height;
    this.balance = balance;
}

function isBalancedTreeHelper(root) {
    if (root === null) return new TreeInfo(-1, true);

    const leftTree = isBalancedTreeHelper(root.left);
    if (!leftTree.balance) return new TreeInfo(-1, false);

    const rightTree = isBalancedTreeHelper(root.right);
    if (!rightTree.balance) return new TreeInfo(root.right, false);

    if (Math.abs(leftTree.height - rightTree.height) <= 1) {
        return new TreeInfo(Math.max(leftTree.height, rightTree.height) + 1, true);
    }

    return new TreeInfo(-1, false);
}

var isBalanced = function(root) {
    return isBalancedTreeHelper(root).balance;
}
// @lc code=end

