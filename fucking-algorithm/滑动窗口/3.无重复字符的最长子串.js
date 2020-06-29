/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (29.03%)
 * Likes:    2050
 * Dislikes: 0
 * Total Accepted:    155.7K
 * Total Submissions: 513.9K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (string) {
    let num = 0,
        res = 0;
    let sub = '';
    for (item of string) {
        if (sub.indexOf(item) === -1) {
            sub += item;
            num++;
            res = res < num ? num : res;
        } else {
            sub += item;
            sub = sub.substring(sub.indexOf(item) + 1);
            num = sub.length;
        }
    }
    return res;
};

/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let left = 0, right = 0, res = 0;
    const win = new Map();
    while (right < str.length) {
        const cur = str[right];
        right++;
        if (win.get(cur)) {
            win.set(cur, win.get(cur) + 1);
        } else {
            win.set(cur, 1);
        }
        while (win.get(cur) > 1) {
            const del = str[left];
            left++;
            win.set(del, win.get(del) - 1);
        }
        res = Math.max(res, right - left);
    }
    return res;
}
// @lc code=end