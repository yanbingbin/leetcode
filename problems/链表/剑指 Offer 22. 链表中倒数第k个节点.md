## 题目地址

https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

## 题目描述

难度：简单

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 2 个节点是值为 4 的节点。

### 示例1：

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

## 解题方法

- 快慢指针，先让快指针走 k 步， 然后慢指针和快指针一起走
- 当快指针走到结尾时，慢指针指向的则是倒数第 k 个节点

```js
var getKthFromEnd = function(head, k) {
    let fast = head;
    let slow = head;
    while (k) {
        fast = fast.next;
        k--;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
```

