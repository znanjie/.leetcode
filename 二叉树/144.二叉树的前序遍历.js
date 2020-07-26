/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (62.40%)
 * Likes:    208
 * Dislikes: 0
 * Total Accepted:    71.1K
 * Total Submissions: 110.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 * 
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
 * Top->Bottom
 * Left->Right
 */
var preorderTraversal = function(root) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};
/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 * Top->Bottom
 * Left->Right
 */
var preorderTraversal = function(root) {
    const arr = [], res = [];
    root && arr.push(root);

    while (arr.length > 0) {
        const cur = arr.pop();
        res.push(cur.val);

        cur.right && arr.push(cur.right);
        cur.left && arr.push(cur.left);
    }
    return res;
}
// @lc code=end

