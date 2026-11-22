function combinationSum(candidates, target) {
    const res = [];
    // sort to help pruning and ensure non‑decreasing order in combinations
    candidates.sort((a, b) => a - b);
    const path = [];
    function dfs(start, remaining) {
        if (remaining === 0) {
            // found a valid combination, push a copy
            res.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const val = candidates[i];
            if (val > remaining) break; // further values will also be too large
            path.push(val);
            // i (not i+1) because we can reuse the same element
            dfs(i, remaining - val);
            path.pop();
        }
    }
    dfs(0, target);
    return res;
}