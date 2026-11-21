function threeSumClosest(nums, target) {
    // Sort the array to enable two‑pointer technique
    nums.sort((a, b) => a - b);
    // Initialize answer with the sum of first three elements
    let closest = nums[0] + nums[1] + nums[2];
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        // Skip duplicates for the first element to reduce work (optional)
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // If this sum is exactly the target, we can return immediately
            if (sum === target) return sum;
            // Update closest if this sum is nearer to target
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }
            // Move pointers based on comparison with target
            if (sum < target) {
                left++;
                // Optional: skip duplicate values to avoid redundant work
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else {
                right--;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    return closest;
}