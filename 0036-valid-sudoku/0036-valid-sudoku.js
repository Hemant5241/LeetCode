var isValidSudoku = function(board) {
    // Arrays of Sets for rows, columns, and 3x3 sub‑boxes
    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
    const boxes = Array.from({length: 9}, () => new Set());
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue; // empty cell
            // Row check
            if (rows[i].has(val)) return false;
            rows[i].add(val);
            // Column check
            if (cols[j].has(val)) return false;
            cols[j].add(val);
            // Box index: (i/3)*3 + j/3
            const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIdx].has(val)) return false;
            boxes[boxIdx].add(val);
        }
    }
    return true;
};