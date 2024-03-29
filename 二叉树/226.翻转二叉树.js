/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (72.42%)
 * Likes:    381
 * Dislikes: 0
 * Total Accepted:    57.7K
 * Total Submissions: 77.8K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 翻转一棵二叉树。
 * 
 * 示例：
 * 
 * 输入：
 * 
 * ⁠    4
 * ⁠  /   \
 * ⁠ 2     7
 * ⁠/ \   / \
 * 1   3 6   9
 * 
 * 输出：
 * 
 * ⁠    4
 * ⁠  /   \
 * ⁠ 7     2
 * ⁠/ \   / \
 * 9   6 3   1
 * 
 * 备注:
 * 这个问题是受到 Max Howell 的 原问题 启发的 ：
 * 
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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
 * 递归
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return root;

    [root.left, root.right] = [root.right, root.left];
    if (root.left !== null) {
        invertTree(root.left);
    }
    if (root.right !== null) {
        invertTree(root.right);
    }
    return root;
};

/**
 * 迭代
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return root;

    const stack = [root];
    while(stack.length > 0) {
        const cur = stack.pop();

        [cur.left, cur.right] = [cur.right, cur.left];
        if (cur.left !== null) {
            stack.push(cur.left);
        }
        if (cur.right !== null) {
            stack.push(cur.right);
        }
    }
    return root;
}
// @lc code=end

