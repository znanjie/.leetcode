/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (38.70%)
 * Likes:    292
 * Dislikes: 0
 * Total Accepted:    29.6K
 * Total Submissions: 66.3K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 
 * 说明：
 * 
 * 
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s: "abab" p: "ab"
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0, right = 0;
    const need = new Map(), win = new Map(), res = [];
    let valid = 0;

    p.split('').forEach(item=> {
        if (need.has(item)) {
            need.set(item, need.get(item) + 1);
        } else {
            win.set(item, 0);
            need.set(item, 1);
        }
    });

    while (right < s.length) {
        const cur = s[right];
        right++;

        if (need.has(cur)) {
            win.set(cur, win.get(cur) + 1);
            if (need.get(cur) === win.get(cur)) {
                valid++;
            }
        }
        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left);
            }
            const del = s[left];
            if (need.has(del)) {
                if (need.get(del) === win.get(del)) {
                    valid--;
                }
                win.set(del, win.get(del) - 1);
            }
            left++;
        }
    }
    return res;
};
// @lc code=end

