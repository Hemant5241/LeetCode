/**
 * Removes duplicates from a sorted array in-place.
 * @param {number[]} nums - Sorted integer array.
 * @return {number} The number of unique elements.
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;
    // `i` points to the last unique element's index.
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    // Number of unique elements is index + 1.
    return i + 1;
};