/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (52.56%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    18.3K
 * Total Submissions: 33.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
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
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;

    if (root.left !== null && root.left.left === null && root.left.right === null) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

// 迭代
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;

    const stack = [];
    let leftSum = 0;

    stack.push({
        node: root,
        isLeft: false
    });

    while (stack.length > 0) {
        const cur = stack.shift();

        if (cur.isLeft && !cur.node.left && !cur.node.right) {
            leftSum += cur.node.val;
        }
        if (cur.node.left !== null) {
            stack.push({
                node: cur.node.left,
                isLeft: true
            });
        }
        if (cur.node.right !== null) {
            stack.push({
                node: cur.node.right,
                isLeft: false
            });
        }
    }

    return leftSum;
}
// @lc code=end
