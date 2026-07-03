class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const h = matrix.length;
        const w = matrix[0].length;

        let l = 0;
        let r = (w * h) - 1;

        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2);
            let midValue = matrix[Math.floor(mid / w)][mid % w];

            if (midValue < target) {
                l = mid + 1;
            } else if (midValue > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}