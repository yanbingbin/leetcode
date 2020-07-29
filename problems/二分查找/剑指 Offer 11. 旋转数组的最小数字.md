## 题目地址

https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof

## 题目描述

难度：简单

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  


### 示例1：

```
输入：[3,4,5,1,2]
输出：1
```

### 示例2：

```
输入：[2,2,2,0,1]
输出：0
```

## 暴力法

- 直接遍历数组对比找到最小的值

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
	let res = Infinity;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] < res) {
			res = numbers[i]
		}
	}
	return res;
};
```

## 双指针

- 利用数组是排序过的特性

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
	let left = 0;
	let right = numbers.length - 1;

	while (left < right) {
		const mid = (left + right) >> 1;
		if (numbers[mid] > numbers[right]) { // 说明要取的结果在左排序数组之间
			left = mid + 1;
		} else if (numbers[mid] < numbers[right]) { // 说明要取的结果在右排序数组中
			right = mid;
		} else {
			right--;
		} 
	}
	return numbers[right];
};
```

