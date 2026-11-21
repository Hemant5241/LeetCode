function removeElement(nums, val) {
    let k = 0; // position to place next non‑val element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}