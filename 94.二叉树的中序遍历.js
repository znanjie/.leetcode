/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.69%)
 * Likes:    406
 * Dislikes: 0
 * Total Accepted:    109.2K
 * Total Submissions: 155.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
 * Left->Node->Right
 */
var inorderTraversal = function(root) {
    return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
};

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 * Left->Node->Right
 */
var inorderTraversal = function(root) {
    const arr = [], res = [];
    let cur = root;

    while (cur || arr.length > 0) {
        while(cur) {
            arr.push(cur);
            cur = cur.left;
        }
        cur = arr.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
}
// @lc code=end

