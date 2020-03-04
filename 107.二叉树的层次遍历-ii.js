/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (62.99%)
 * Likes:    191
 * Dislikes: 0
 * Total Accepted:    43.5K
 * Total Submissions: 67.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @return {number[][]}
 */
let res = [];

function helper(root, level) {
    if (res.length === level) {
        res.push([root.val]);
    } else {
        res[level] = [...res[level], ...[root.val]];
    }
    if (root.left) {
        helper(root.left, level + 1);
    }
    if (root.right) {
        helper(root.right, level + 1);
    }
}

var levelOrderBottom = function(root) {
    res = [];
    if (root !== null) {
        helper(root, 0);
    }
    return res.reverse();
};

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const result = [], stack = [];

    if (root !== null) {
        stack.push({
            node: root,
            deep: 0
        });
    }

    while (stack.length > 0) {
        const cur = stack.shift();
        const node = cur.node;
        const deep = cur.deep;

        result[deep] = result[deep] ? [...result[deep], ...[node.val]] : [node.val];

        if (node.left !== null) {
            stack.push({
                node: node.left,
                deep: cur.deep + 1
            })
        }
        if (node.right !== null) {
            stack.push({
                node: node.right,
                deep: cur.deep + 1
            })
        }
    }

    return result.reverse();
}
// @lc code=end

