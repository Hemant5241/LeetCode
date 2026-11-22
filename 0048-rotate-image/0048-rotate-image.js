/**
 * Rotates the given n x n matrix 90 degrees clockwise in-place.
 * @param {number[][]} matrix
 */
var rotate = function(matrix) {
    const n = matrix.length;
    // Transpose the matrix (swap across the main diagonal)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    // Reverse each row to achieve clockwise rotation
    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1;
        while (left < right) {
            const tmp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = tmp;
            left++;
            right--;
        }
    }
};