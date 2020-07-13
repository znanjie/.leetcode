/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 *
 * https://leetcode-cn.com/problems/super-egg-drop/description/
 *
 * algorithms
 * Hard (21.09%)
 * Likes:    430
 * Dislikes: 0
 * Total Accepted:    26.4K
 * Total Submissions: 92.1K
 * Testcase Example:  '1\n2'
 *
 * 你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。
 * 
 * 每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。
 * 
 * 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。
 * 
 * 每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。
 * 
 * 你的目标是确切地知道 F 的值是多少。
 * 
 * 无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：K = 1, N = 2
 * 输出：2
 * 解释：
 * 鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
 * 否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
 * 如果它没碎，那么我们肯定知道 F = 2 。
 * 因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
 * 
 * 
 * 示例 2：
 * 
 * 输入：K = 2, N = 6
 * 输出：3
 * 
 * 
 * 示例 3：
 * 
 * 输入：K = 3, N = 14
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= K <= 100
 * 1 <= N <= 10000
 * 
 * 
 */
var superEggDrop = (K, N)=> {
    let dp = Array(K+1).fill(0)
    let cnt = 0
    while (dp[K] < N){
        cnt++
        for (let i=K; i>0; i--){
            dp[i] = dp[i-1] + dp[i] + 1
        }
    }
    return cnt
};
// @lc code=start
/**
 * @param {number} K 鸡蛋数量
 * @param {number} N 总楼层数
 * @return {number}
 */
var superEggDrop = function(K, N) {
    const memo = new Map();

    return (function dp(K, N) {
        if (K === 1) return N;
        if (N === 0) return 0;
        if (memo.has(`${K}${N}`)) return memo.get(`${K}${N}`);

        let res = Infinity;
        // 线性搜索
        for (let i = 1; i <= N; i++) {
            res = Math.min(res, Math.max(dp(K, N - i), dp(K - 1, i - 1)) + 1);
        }
        // 二分搜索
        // let low = 1, height = N;
        // while (low < height) {
        //     mid = (low + height) / 2;
        //     broken_it = dp(K - 1, mid - 1); // 鸡蛋碎掉
        //     broken_not = dp(K, N - mid); // 鸡蛋没碎
        //     // res = min(res, max(碎, 没碎) + 1)
        //     if (broken_it > broken_not) {
        //         height = mid - 1;
        //         res = Math.min(res, broken_it + 1);
        //     } else {
        //         low = mid + 1;
        //         res = Math.min(res, broken_not + 1);
        //     }
        // }
        memo.set(`${K}${N}`, res);
        return res;
    })(K, N);
};
console.log(superEggDrop(4, 5000));
// @lc code=end

