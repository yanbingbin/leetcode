## 题目地址



## 题目描述

https://leetcode-cn.com/problems/UlBDOe/

难度：中等

小扣出去秋游，途中收集了一些红叶和黄叶，他利用这些叶子初步整理了一份秋叶收藏集 leaves， 字符串 leaves 仅包含小写字符 r 和 y， 其中字符 r 表示一片红叶，字符 y 表示一片黄叶。
出于美观整齐的考虑，小扣想要将收藏集中树叶的排列调整成「红、黄、红」三部分。每部分树叶数量可以不相等，但均需大于等于 1。每次调整操作，小扣可以将一片红叶替换成黄叶或者将一片黄叶替换成红叶。请问小扣最少需要多少次调整操作才能将秋叶收藏集调整完毕。

### 示例1：

```
输入：leaves = "rrryyyrryyyrr"

输出：2

解释：调整两次，将中间的两片红叶替换成黄叶，得到 "rrryyyyyyyyrr"
```

### 示例2：

```
输入：leaves = "ryr"

输出：0

解释：已符合要求，不需要额外操作
```

## 解题方法

- 注意题目，这里是要替换不是交换
- 用三种状态表示
- dp[i][j] j三种模式：
- j = 0 的模式是红树叶开头的,需要字符为r, 如果leaves[i] == 'y' ,要进行一次更改
- j = 1 => y ，如果leaves[i] == 'r' ,要进行一次操作
- j = 2 => r ，如果leaves[i] == 'y' ,要进行一次操作

- 初始值：
- dp[0][1],dp[0][2],dp[1][2]
- 不可以使用模式1，2，将其置为max

```js
/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function(leaves) {
    const len = leaves.length;
    const isYellow = val => val == 'y';
    const isRed = val => val == 'r';
    const dp = new Array(len).fill(0).map(() => new Array(3).fill(0));

    if (isRed(leaves[0])) {
        dp[0][0] = 0;
    } else {
        dp[0][0] = 1;
    }
    dp[0][1] = dp[0][2] = dp[1][2] = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < len; i++) {
        const item = leaves[i];
        dp[i][0] = dp[i - 1][0] + (isYellow(item) ? 1 : 0);
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + (isRed(item) ? 1 : 0);

        if (i >= 2) {
            dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][2]) + (isYellow(item) ? 1 : 0);
        }
    }
    return dp[len - 1][2];
};
```