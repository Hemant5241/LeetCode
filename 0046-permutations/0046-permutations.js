/**
 * Returns all possible permutations of the given distinct integer array.
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const n = nums.length;
    // Helper performs in‑place swapping backtracking.
    const backtrack = (first) => {
        if (first === n) {
            // Make a shallow copy because nums will be mutated later.
            res.push(nums.slice());
            return;
        }
        for (let i = first; i < n; i++) {
            // place i‑th element first in the current permutation
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first + 1);
            // restore original order for next iteration
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    };
    backtrack(0);
    return res;
};