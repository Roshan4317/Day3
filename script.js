// Print Right-Angled Star Triangle

// function printRightAngledTriangle(row) {
//   for (let i = 1; i <= row; i++) {
//     let result = "";

//     for (let r = 1; r <= i; r++) {
//       result = result + "*";
//     }
//     console.log(result);
//   }
// }

// console.log(printRightAngledTriangle(8));

// const row = 15;
// let star = "";

// for (let i = 1; i <= row; i++) {
//   star = star + "*";
//   console.log(star);
// }

// ***********************************************************************************************************
// Print Inverted Right-Angled Star Triangle

// function invertedRATriangle(row) {
//   for (let i = row; i >= 1; i--) {
//     let star = "";
//     for (let j = i; j >= i; j--) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }

// console.log(invertedRATriangle(5));

// ***********************************************************************************************************

// Pyramid

// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let star = "";

//   for (let j = 1; j <= rows + i - 1; j++) {
//     if (j <= rows - i) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }

//   console.log(star);
// }

// ***********************************************************************************************************
// Print Hollow Pyramid

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   let star = "";

//   for (let j = 1; j <= row + i - 1; j++) {
//     if (
//       j === row - i + 1 || // left edge
//       j === row + i - 1 ||
//       i === row
//     ) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

(9, 8, 7, 6, 5);

// ***********************************************************************************************************

// j===rows-i+1
// Inverted Pyramid

// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//   let star = "";

//   for (let j = 1; j <= rows + i - 1; j++) {
//     if (i === rows || j === rows - i + 1 || j === rows + i - 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// ***********************************************************************************************************

//ButterFly pattern

// const rows = 5;

// for (let i = 1; i <= rows * 2 - 1; i++) {
//   let currentRow = i <= rows ? i : rows * 2 - i;

//   let star = "";

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j <= currentRow || j > rows * 2 - 1 - currentRow) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// Print Diamond pattern

// Print Diamond pattern

const rows = 3;

for (let i = 1; i <= rows * 2 - 1; i++) {
  let currentRow = i <= rows ? i : rows * 2 - i;
  let star = "";

  let left = rows - currentRow + 1;
  let right = rows + currentRow - 1;

  for (let j = 1; j <= rows * 2 - 1; j++) {
    if (j >= left && j <= right) {
      star += "*";
    } else {
      star += " ";
    }
  }

  console.log(star);
}

