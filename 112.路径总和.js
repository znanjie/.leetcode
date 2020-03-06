/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (48.21%)
 * Likes:    248
 * Dislikes: 0
 * Total Accepted:    55.7K
 * Total Submissions: 113.1K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) return false;
    sum -= root.val;

    if (root.left === null && root.right === null) return sum === 0;

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

/**
 * 迭代
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) return false;

    const stack = [];
    stack.push({
        node: root,
        sum: sum - root.val
    });
    while (stack.length > 0) {
        const cur = stack.pop();
        const cur_node = cur.node;
        const cur_sum = cur.sum;
        if (cur_node.left === null && cur_node.right === null && cur_sum === 0) return true;
        if (cur_node.left !== null) {
            stack.push({
                node: cur_node.left,
                sum: cur_sum - cur_node.left.val
            })
        }
        if (cur_node.right !== null) {
            stack.push({
                node: cur_node.right,
                sum: cur_sum - cur_node.right.val
            })
        }
    }
    return false;
}
// @lc code=end

