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
let resolution = 20;

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
}

let next = make2DArray(cols, rows);

function compute() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      //count live neighbors!
      let sum = 0;
      sum += gris[i][j];
    }
  }
}
