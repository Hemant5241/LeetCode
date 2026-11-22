function firstMissingPositive(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        // Place nums[i] at its correct position nums[i] - 1
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            const correctIdx = nums[i] - 1;
            // swap nums[i] and nums[correctIdx]
            const temp = nums[i];
            nums[i] = nums[correctIdx];
            nums[correctIdx] = temp;
        }
    }
    // After placement, the first index i where nums[i] != i+1 is the answer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    // If all positions are correct, answer is n+1
    return n + 1;
}