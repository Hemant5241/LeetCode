var twoSum = function(nums, target) {
    const indexMap = new Map(); // value -> index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indexMap.has(complement)) {
            return [indexMap.get(complement), i];
        }
        indexMap.set(nums[i], i);
    }
    // According to problem constraints, a solution always exists.
};