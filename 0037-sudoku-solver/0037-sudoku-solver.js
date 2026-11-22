var solveSudoku = function(board) {
    const rows = new Array(9).fill(0);
    const cols = new Array(9).fill(0);
    const boxes = new Array(9).fill(0);
    const empties = [];
    const boxIndex = (r, c) => Math.floor(r / 3) * 3 + Math.floor(c / 3);
    const popcount = x => {
        let cnt = 0;
        while (x) {
            x &= x - 1;
            cnt++;
        }
        return cnt;
    };
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const ch = board[r][c];
            if (ch === '.') {
                empties.push([r, c]);
            } else {
                const mask = 1 << (ch.charCodeAt(0) - 49);
                rows[r] |= mask;
                cols[c] |= mask;
                boxes[boxIndex(r, c)] |= mask;
            }
        }
    }
    const dfs = pos => {
        if (pos === empties.length) return true;
        // choose cell with minimum candidates (MRV heuristic)
        let bestIdx = -1, bestCnt = 10;
        for (let i = pos; i < empties.length; i++) {
            const [r, c] = empties[i];
            const used = rows[r] | cols[c] | boxes[boxIndex(r, c)];
            const cnt = 9 - popcount(used);
            if (cnt < bestCnt) {
                bestCnt = cnt;
                bestIdx = i;
                if (cnt === 1) break;
            }
        }
        [empties[pos], empties[bestIdx]] = [empties[bestIdx], empties[pos]];
        const [r, c] = empties[pos];
        const used = rows[r] | cols[c] | boxes[boxIndex(r, c)];
        for (let d = 0; d < 9; d++) {
            const mask = 1 << d;
            if ((used & mask) === 0) {
                board[r][c] = String.fromCharCode(49 + d);
                rows[r] |= mask;
                cols[c] |= mask;
                boxes[boxIndex(r, c)] |= mask;
                if (dfs(pos + 1)) return true;
                board[r][c] = '.';
                rows[r] ^= mask;
                cols[c] ^= mask;
                boxes[boxIndex(r, c)] ^= mask;
            }
        }
        [empties[pos], empties[bestIdx]] = [empties[bestIdx], empties[pos]];
        return false;
    };
    dfs(0);
};