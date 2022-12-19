export const calculateWinner = (cells: any) => {
  // const lines = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ];
  // for (let index = 0; index < lines.length; index++) {
  //   const [a, b, c] = lines[index];
  //   if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
  //     return cells[a];
  //   }
  // }
  for (let i: number = 0; i < cells.length; i++) {
    for (let j: number = 0; j < cells[i].length; j++) {
      if (
        cells[i][j] &&
        cells[i][j] === cells[i][j + 1] &&
        cells[i][j] === cells[i][j + 2]
      ) {
        return cells[i][j];
      }
      if (i < 2) {
        if (
          cells[i][j] &&
          cells[i][j] === cells[i + 1][j + 1] &&
          cells[i][j] === cells[i + 2][j + 2]
        ) {
          return cells[i][j];
        }
        if (
          cells[i][j] &&
          cells[i][j] === cells[i + 1][j] &&
          cells[i][j] === cells[i + 2][j]
        ) {
          return cells[i][j];
        }
      }
    }
  }

  return null;
};
