/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (71.25%)
 * Likes:    466
 * Dislikes: 0
 * Total Accepted:    129.8K
 * Total Submissions: 179.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);

    return Math.max(leftMax, rightMax) + 1;
};

/**
 * 迭代，深度优先搜索
 */
var maxDepth = function(root) {
    let depth = 0;
    const stack = [];

    if (root !== null) {
        stack.push({
            key: root,
            deep: 1
        });
    }

    while (stack.length > 0) {
        const cur = stack.shift();
        const cur_depth = cur.deep;
        root = cur.key;

        if (root !== null) {
            depth = Math.max(depth, cur_depth);
            stack.push({
                key: root.left,
                deep: cur_depth + 1
            });
            stack.push({
                key: root.right,
                deep: cur_depth + 1
            });
        }
    }
    return depth;
}
// @lc code=end

