/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (60.40%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    27.6K
 * Total Submissions: 44.1K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) return [];

    const paths = [];
    helper(root, '', paths);

    return paths;
};
var helper = function(root, path, paths) {
    if (root !== null) {
        path += `${root.val}`;
        if (root.left === null && root.right === null) {
            paths.push(path);
        } else {
            path += '->'
            helper(root.left, path, paths);
            helper(root.right, path, paths);
        }
    }
}

/**
 * 迭代
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) return [];

    const paths = [], stack = [];

    stack.push({
        node: root,
        path: `${root.val}`
    });

    while(stack.length > 0) {
        const cur = stack.pop();
        const curNode = cur.node;
        if (curNode.left === null && curNode.right === null) {
            paths.push(cur.path);
        } else {
            if (curNode.right !== null) {
                stack.push({
                    node: curNode.right,
                    path: `${cur.path}->${curNode.right.val}`
                })
            }
            if (curNode.left !== null) {
                stack.push({
                    node: curNode.left,
                    path: `${cur.path}->${curNode.left.val}`
                })
            }
        }
    }

    return paths;
}
// @lc code=end

