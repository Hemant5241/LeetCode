/**
 * Search Insert Position
 * @param {number[]} nums - sorted array of distinct integers
 * @param {number} target - value to locate or insert
 * @return {number} index of target or insertion point
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // left is the smallest index greater than target, i.e., insertion point
    return left;
};