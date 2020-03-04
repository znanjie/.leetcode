/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (48.87%)
 * Likes:    629
 * Dislikes: 0
 * Total Accepted:    98.4K
 * Total Submissions: 196.1K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
var isSymmetric = function(root) {
    return isMirror(root, root);
};

/**
 * 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}
/**
 * 迭代
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror = function(p, q) {
    const stack = [p, q];
    while (stack.length > 0) {
        q = stack.pop();
        p = stack.pop();
        if (p === null && q === null) continue;
        if (!check(p, q)) return false;
        stack.push(p.left);
        stack.push(q.right);
        stack.push(p.right);
        stack.push(q.left);
    }
    return true;
}
var check = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    return true;
}
// @lc code=end

