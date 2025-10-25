const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    resultMatrix[i] = [];

    for (let j = 0; j < matrix[i].length; j++) {
      resultMatrix[i][j] = calculateMines(matrix, i, j);
    }
  }

  return resultMatrix;
}

function calculateMines(matrix, currentI, currentJ) {
  let count = 0;

  for (let i = currentI - 1; i <= currentI + 1; i++) {
    for (let j = currentJ - 1; j <= currentJ + 1; j++) {
      if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[i].length) {
        continue;
      }

      if (i === currentI && j === currentJ) {
        continue;
      }

      if (matrix[i][j]) {
        count++;
      }
    }
  }

  return count;
}

module.exports = {
  minesweeper
};
