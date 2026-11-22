var permuteUnique = function(nums) {
    const res = [];
    nums.sort((a,b)=>a-b);
    const used = new Array(nums.length).fill(false);
    const path = [];
    const backtrack = () => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack();
            path.pop();
            used[i] = false;
        }
    };
    backtrack();
    return res;
};