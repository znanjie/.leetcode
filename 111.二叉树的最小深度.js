/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (40.45%)
 * Likes:    218
 * Dislikes: 0
 * Total Accepted:    55.1K
 * Total Submissions: 132.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;

    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);

    if (root.left === null || root.right === null) {
        return leftDepth + rightDepth + 1;
    }

    return Math.min(leftDepth, rightDepth) + 1;
};

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;
    let depth = Infinity;
    const stack = [];
    stack.push({
        node: root,
        deep: 1
    });

    while (stack.length > 0) {
        const cur = stack.shift();
        const cur_depth = cur.deep;
        root = cur.node;

        if (root !== null) {
            if (root.left === null && root.right === null) {
                depth = Math.min(depth, cur_depth);
            }
            if (root.left) {
                stack.push({
                    node: root.left,
                    deep: cur_depth + 1
                });
            }
            if (root.right) {
                stack.push({
                    node: root.right,
                    deep: cur_depth + 1
                });
            }
        }
    }
    return depth;
}
// @lc code=end

