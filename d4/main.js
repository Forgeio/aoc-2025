const fs = require('fs');
const fileName = 'input.txt';
const data = fs.readFileSync(fileName, 'utf8');
const rows = data.split(/\r?\n/);
const rowSize = rows[0].length;
const EMPTY = ".";
const ROLL = "@";
const REACHABLE = "x";
let answer = 0;
let grid = [];
let removedThisRound = -1;

rows.forEach(function(row, index) {
  grid[index] = [];
  for(let i=0; i < row.length; i++) {
    grid[index][i] = row[i];
  }
});

let columnSize = grid.length;

while (removedThisRound != 0) {
  let r = 0;
  
  for(let i=0; i < rowSize; i++) {
    for(let j=0; j < columnSize; j++) {
      let x = grid[i][j];
      let adj = 0;

      let nw = EMPTY;
      let n = EMPTY;
      let ne = EMPTY;
      let w = EMPTY;
      let e = EMPTY;
      let sw = EMPTY;
      let s = EMPTY;
      let se = EMPTY;

      if (x != ROLL) {
        continue;
      }

      if (j > 0) {
        if (i > 0) {
          nw = grid[i - 1][j - 1];
        }
        n = grid[i][j - 1];
        if (i < rowSize - 1) {
          ne = grid[i + 1][j - 1];
        }
      }

      if (i > 0) {
        w = grid[i - 1][j];
      }
      if (i < rowSize - 1) {
        e = grid[i + 1][j];
      }

      if (j < columnSize - 1) {
        if (i > 0) {
          sw = grid[i - 1][j + 1];
        }
    
        s = grid[i][j + 1];

        if (i < rowSize - 1) {
          se = grid[i + 1][j + 1];
        }
      }

      if (nw != EMPTY) {adj += 1};
      if (n != EMPTY) {adj += 1};
      if (ne != EMPTY) {adj += 1};
      if (w != EMPTY) {adj += 1};
      if (e != EMPTY) {adj += 1};
      if (sw != EMPTY) {adj += 1};
      if (s != EMPTY) {adj += 1};
      if (se != EMPTY) {adj += 1};

      if (adj < 4) {
        r += 1; grid[i][j] = EMPTY;
      }
    }
  }
  removedThisRound = r;
  answer += r;
}

console.log(`Rolls removed: ${answer}`);