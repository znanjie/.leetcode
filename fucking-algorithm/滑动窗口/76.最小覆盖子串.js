/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (34.52%)
 * Likes:    614
 * Dislikes: 0
 * Total Accepted:    59K
 * Total Submissions: 155K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
 * 
 * 示例：
 * 
 * 输入: S = "ADOBECODEBANC", T = "ABC"
 * 输出: "BANC"
 * 
 * 说明：
 * 
 * 
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0, right = 0, start = 0, valid = 0, len = Infinity;
    const needs = new Map(), win = new Map();

    t.split('').forEach(item=> {
        if (needs.has(item)) {
            needs.set(item, needs.get(item) + 1);
        } else {
            win.set(item, 0);
            needs.set(item, 1);
        }
    });

    while (right < s.length) {
        const cur = s[right];

        right++; // 不断扩大窗口
        if (needs.has(cur)) { // 扩大窗口的同时更新状态
            win.set(cur, win.get(cur) + 1);
            if (win.get(cur) === needs.get(cur)) {
                valid++;
            }
        }

        while (valid === needs.size) { // 已找到符合的子串(需要收缩)
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            const del = s[left];

            left++; // 开始收缩窗口，找到为了找到最小子串
            if (needs.has(del)) {
                if (win.get(del) === needs.get(del)) {
                    valid--;
                }
                win.set(del, win.get(del) - 1);
            }
        }
    }

    return len === Infinity ? '' : s.substr(start, len);
};
// @lc code=end

