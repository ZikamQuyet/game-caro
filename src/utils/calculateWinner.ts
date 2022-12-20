export const calculateWinner = (cells: any) => {
  for (let i: number = 0; i < cells.length; i++) {
    for (let j: number = 0; j < cells[i].length; j++) {
      if (
        cells[i][j] &&
        cells[i][j] === cells[i][j + 1] &&
        cells[i][j] === cells[i][j + 2] &&
        cells[i][j] === cells[i][j + 3] &&
        cells[i][j] === cells[i][j + 4]
      ) {
        return cells[i][j];
      }
      if (
        i + 1 < cells.length - 1 ||
        i + 2 < cells.length - 1 ||
        i + 3 < cells.length - 1 ||
        i + 4 < cells.length - 1
      ) {
        if (
          cells[i][j] &&
          cells[i][j] === cells[i + 1][j] &&
          cells[i][j] === cells[i + 2][j] &&
          cells[i][j] === cells[i + 3][j] &&
          cells[i][j] === cells[i + 4][j]
        ) {
          return cells[i][j];
        }
        if (
          cells[i][j] &&
          cells[i][j] === cells[i + 1][j + 1] &&
          cells[i][j] === cells[i + 2][j + 2] &&
          cells[i][j] === cells[i + 3][j + 3] &&
          cells[i][j] === cells[i + 4][j + 4]
        ) {
          return cells[i][j];
        }
      }
      if (i - 1 > 0 || i - 2 > 0) {
        if (
          cells[i][j] &&
          cells[i][j] === cells[i - 1][j + 1] &&
          cells[i][j] === cells[i - 2][j + 2] &&
          cells[i][j] === cells[i - 3][j + 3] &&
          cells[i][j] === cells[i - 4][j + 4]
        ) {
          return cells[i][j];
        }
      }
    }
  }

  return null;
};
