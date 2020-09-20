/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.03%)
 * Likes:    1862
 * Dislikes: 0
 * Total Accepted:    414K
 * Total Submissions: 962.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const str = s.split('');
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
            default:
                stack.push(str[i]);
                break;
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};

var isValid = function(s) {
    const stack = [];
    const parenMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const key of s) {
        if (key in parenMap) {
            if (stack.pop() !== parenMap[key]) return false;
        } else {
            stack.push(key);
        }
    }

    return stack.length === 0;
}
// @lc code=end

