/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return []
    }
    if (matrix[0].length ===0 ){
        return []
    }
    const n = matrix.length;
    const m = matrix[0].length;
    
    const x = m * n;
    
    let min = Math.min(n, m);
    
    let res = [];
    
    let lp = 0;
    
    while (lp < min) {
        for (let i = lp; i < m - lp; i++) {
            res.push(matrix[lp][i])
        }
        for (let i = lp + 1; i < n - lp; i++) {
            res.push(matrix[i][m - lp - 1])
        }
        for (let i = m - lp - 2; i > lp; i--) {
            res.push(matrix[n - lp - 1][i])
        }
        for (let i = n - lp - 1; i > lp; i--) {
            res.push(matrix[i][lp])
        }
        lp++;
    }
    return res.slice(0, x)
};
