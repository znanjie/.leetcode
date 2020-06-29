/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (33.03%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    31.4K
 * Total Submissions: 86.8K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 * 
 * 示例1:
 * 
 * 
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left = 0, right = 0, valid = 0;
    const needs = new Map(), win = new Map();

    s1.split('').forEach(item=> {
        if (needs.has(item)) {
            needs.set(item, needs.get(item) + 1);
        } else {
            win.set(item, 0);
            needs.set(item, 1);
        }
    });

    while (right < s2.length) {
        const cur = s2[right];

        right++;
        if (needs.has(cur)) {
            win.set(cur, win.get(cur) + 1);
            if (win.get(cur) === needs.get(cur)) {
                valid++;
            }
        }

        while (right - left >= s1.length) { // 保持滑动窗口的长度，开始收缩
            if (valid === needs.size) {
                return true;
            }
            const del = s2[left];

            left++;
            if (needs.has(del)) {
                if (win.get(del) === needs.get(del)) {
                    valid--;
                }
                win.set(del, win.get(del) - 1);
            }
        }
    }

    return false;
};
// @lc code=end

