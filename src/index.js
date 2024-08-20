
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if ((i+1) % 2 === 0) {
      matrix[i].reverse();
    }
    newMatrix = newMatrix.concat(matrix[i]);
  }
  return newMatrix;
}
