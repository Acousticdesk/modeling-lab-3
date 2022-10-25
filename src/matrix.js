"use strict";
exports.__esModule = true;
exports.multiplyMatrices = void 0;
function multiplyMatrices(m1, m2) {
    if (m1[0].length !== m2.length) {
        throw new Error("Matrices can't be multiplied");
    }
    var resultingMatrix = [];
    // rows
    for (var i = 0; i < m1.length; i += 1) {
        // columns
        resultingMatrix[i] = resultingMatrix[i] || [];
        for (var j = 0; j < m2[0].length; j += 1) {
            for (var k = 0; k < m1[0].length; k += 1) {
                resultingMatrix[i][j] = resultingMatrix[i][j] || 0;
                resultingMatrix[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }
    return resultingMatrix;
}
exports.multiplyMatrices = multiplyMatrices;
console.log(multiplyMatrices([
    [1, 4, -2],
    [3, 5, -6],
], [
    [5, 2, 8, -1],
    [3, 6, 4, 5],
]));
