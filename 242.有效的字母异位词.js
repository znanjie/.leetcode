/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (61.45%)
 * Likes:    251
 * Dislikes: 0
 * Total Accepted:    138.7K
 * Total Submissions: 225.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * 时间复杂度：O(nlogn) 取决于排序的时间复杂度
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function sort(str) {
        return str.split('').sort().join('');
    }
    return sort(s) === sort(t);
};

/**
 * 时间复杂度：O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const sMap = new Map();
    const tMap = new Map();
    let tag = true;

    for (const key of s) {
        if (sMap.has(key)) {
            sMap.set(key, sMap.get(key) + 1);
        } else {
            sMap.set(key, 1);
        }
    }
    for (const key of t) {
        if (tMap.has(key)) {
            tMap.set(key, tMap.get(key) + 1);
        } else {
            tMap.set(key, 1);
        }
    }

    sMap.forEach((val, key)=> {
        if (!tMap.has(key)) {
            tag = false;
        } else if (tMap.get(key) !== val) {
            tag = false;
        }
    });

    return tag;
}
// @lc code=end

