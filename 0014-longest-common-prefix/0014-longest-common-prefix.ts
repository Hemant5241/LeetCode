function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) return "";
    // Find the shortest string length to limit comparisons
    let minLen = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minLen) minLen = strs[i].length;
    }
    let prefixEnd = 0;
    while (prefixEnd < minLen) {
        const ch = strs[0][prefixEnd];
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][prefixEnd] !== ch) {
                return strs[0].slice(0, prefixEnd);
            }
        }
        prefixEnd++;
    }
    return strs[0].slice(0, minLen);
}