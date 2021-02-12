## 题目地址

https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

## 题目描述

难度：简单

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

提示：
- 1 <= nums.length <= 50000
- 1 <= nums[i] <= 10000

### 示例1：

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

## 解题方法

- 遍历数组，将奇数删除，并且加入到数组的最前面

```js
var exchange = function(nums) {
    let i = 0;
    while (i < nums.length) {
        const num = nums[i];
        if (num % 2 !== 0) { // 奇树
            nums.splice(i, 1);
            nums.unshift(num);
        }
        i++;
    }
    return nums;
};
```

## 快慢指针

- 定义快慢双指针 fast 和 low ，fast 在前， low 在后 .
- fast 的作用是向前搜索奇数位置，low 的作用是指向下一个奇数应当存放的位置
- fast 向前移动，当它搜索到奇数时，将它和 nums[low]nums[low] 交换，此时 low 向前移动一个位置 .
- 重复上述操作，直到 fast 指向数组末尾 .

```js
var exchange = function(nums) {
    let fast = 0;
    let slow = 0;
    while (fast < nums.length) {
        if (nums[fast] % 2 !== 0) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow++;
        }
        fast++;
    }
    return nums;
};
```

