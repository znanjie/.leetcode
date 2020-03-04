/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (59.40%)
 * Likes:    390
 * Dislikes: 0
 * Total Accepted:    82.6K
 * Total Submissions: 135.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
 * 递归
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

var levelOrder = function(root) {
    res = [];
    if (root !== null) {
        helper(root, 0);
    }
    return res;
}

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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

    return result;
}
// @lc code=end

