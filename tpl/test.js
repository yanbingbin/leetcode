var longestPalindrome = function(s) {
    const len = s.length;
    if (len < 2) return s;

    let dp = Array.from(new Array(len), () => new Array(len).fill(false));
    let res = '';

    // 第一层倒着循环，才能保证 dp[i+1][j-1] 已经存在
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
             // 判断i 和 j下标的字符串相等时
            //如果间隔小于等于2，则代表length为 3以内的子字符串，则一定是回文子串
            //如果间隔 大于2时，则需要判断 dp[i+1][j-1] 是否为回文子串
            dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i <= 2 || dp[i+1][j-1])
            // 判断符合回文的最大子字符串
            if(dp[i][j] && j - i >= res.length){
                res = s.slice(i,j+1)
            }
        }
    }
    return res;
};