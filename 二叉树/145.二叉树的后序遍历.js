/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (68.43%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    52.9K
 * Total Submissions: 75.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 * Bottom->Top
 * Left->Right
 */
var postorderTraversal = function(root) {
    return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : [];
};
/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 * Bottom->Top
 * Left->Right
 */
var postorderTraversal = function(root) {
    const arr = [], res = [];

    while (root || arr.length > 0) {
        res.unshift(root.val);

        root.left && arr.push(root.left);
        root.right && arr.push(root.right);
        root = arr.pop();
    }
    return res;
}
// @lc code=end

