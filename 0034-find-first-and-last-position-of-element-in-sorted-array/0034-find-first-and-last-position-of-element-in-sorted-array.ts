/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isLeft) => {
        let lo = 0, hi = nums.length - 1;
        let bound = -1;
        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (nums[mid] === target) {
                bound = mid;
                if (isLeft) {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return bound;
    };
    const left = findBound(true);
    if (left === -1) return [-1, -1];
    const right = findBound(false);
    return [left, right];
};