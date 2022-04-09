function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 40;

function setup() {
  createCanvas(400, 400);
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  console.table(grid);
}

// Compute next based on next

function draw() {
  // function to draw the table
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill("#0db7ed");
        stroke("#0db7ed");
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }
  compute();
}

let next = make2DArray(cols, rows);

function compute() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // count live neighbors of 1, 1!
      //   0,0 | 1,0 | 2,0
      //   0,1 | 1,1 | 2,1
      //   0,2 | 1,2 | 2,2

      //state of 1 alive 0 dead
      //   0 | 1 | 0
      //   0 | 1 | 1
      //   0 | 1 | 1

      // result should be 5 -1 (center ignored) = 4

      let sum = 0; // 1,1
      let neighbors = countNeighbors(grid, i, j);
      if (i == 2 && j == 2) {
        console.log((i, j), "neighbors", neighbors);
      }
    }
  }
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}
