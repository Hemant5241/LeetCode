var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        // Determine which half is properly sorted
        if (nums[left] <= nums[mid]) { // left half sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // target in left half
            } else {
                left = mid + 1; // target in right half
            }
        } else { // right half sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // target in right half
            } else {
                right = mid - 1; // target in left half
            }
        }
    }
    return -1;
};