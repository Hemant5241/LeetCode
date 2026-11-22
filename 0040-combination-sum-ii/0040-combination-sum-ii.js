var combinationSum2 = function(candidates, target) {
    // sort to handle duplicates and enable early pruning
    candidates.sort((a, b) => a - b);
    const result = [];
    const path = [];
    const n = candidates.length;
    function backtrack(start, currentSum) {
        if (currentSum === target) {
            result.push([...path]);
            return;
        }
        if (currentSum > target) return;
        for (let i = start; i < n; i++) {
            // skip duplicates at the same recursion depth
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            const nextSum = currentSum + candidates[i];
            // because array is sorted, further numbers will only increase the sum
            if (nextSum > target) break;
            path.push(candidates[i]);
            backtrack(i + 1, nextSum); // move to next index, each number used at most once
            path.pop();
        }
    }
    backtrack(0, 0);
    return result;
};