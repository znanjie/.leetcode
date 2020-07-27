// 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    const coins = [1, 5, 10, 25];
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= n; j++) {
            if (j >= coins[i]) {
                dp[j] = dp[j] + dp[j - coins[i]];
            }
        }
    }
    return dp[n];
};
console.log(waysToChange(10));