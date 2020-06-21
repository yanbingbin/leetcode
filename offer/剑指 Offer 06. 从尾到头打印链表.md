## 题目地址

https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

## 题目描述

难度：简单

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

### 示例1：

```
输入：head = [1,3,2]
输出：[2,3,1]
```

## 解题思路

- 用数组存储结果
- 遍历链表，将获取到的值存到数据的头部
- 将下一个链表存存到head

## 实现代码


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let res = [];
    if (head !== null) {
        res.unshift(head.val);
        head = head.next;
    }
};
```
