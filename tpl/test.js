/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let uniqueNums = new Set(nums);
    let count = 1;
    let maxCount = 1;
    for (let i = 0; i < nums.length; i++) {
        if (!uniqueNums.has(nums[i] - 1)) { // 右边没值说明是起点
            let cur = nums[i];
            while (uniqueNums.has(cur + 1)) {
                cur++;
                count++;
            }
            maxCount = Math.max(maxCount, count);
        } 
        count = 1;
    }
    return maxCount;
};