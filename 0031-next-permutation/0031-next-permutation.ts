var nextPermutation = function(nums) {
    // Find the first index 'i' from the right such that nums[i] < nums[i+1]
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // If such index exists, find the smallest element larger than nums[i] to its right and swap
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // Reverse the suffix starting at i+1 to get the next lexicographic order
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};