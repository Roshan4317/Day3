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
//   let star = "";

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j <= i || j > rows * 2 - 1 - i) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// const rows = 5;

// for (let i = 1; i <= rows * 2 - 1; i++) {
//   let star = "";

//   let currentRow = i <= rows ? i : rows * 2 - i;

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j <= currentRow || j >= rows * 2 - currentRow) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// const row = 5;

// for (let i = 1; i <= row * 2 - 1; i++) {
//   let current = i <= row ? i : row * 2 - i;

//   let frontStar = "*".repeat(current);
//   let space = " ".repeat((row - current) * 2);
//   let last = "*".repeat(current);

//   console.log(frontStar + space + last);
// }

// ***********************************************************************************************************

// Print Diamond pattern

// const rows = 3;

// for (let i = 1; i <= rows * 2 - 1; i++) {
//   let star = "";

//   let current = i <= rows ? i : rows * 2 - i;

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j === rows || (j >= rows - current + 1 && j <= rows + current - 1)) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// const rows = 3;

// for (let i = 1; i <= rows * 2 - 1; i++) {
//   let star = "";

//   const current = i <= rows ? i : rows * 2 - i;

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j === rows||j>=rows-current+1&&j<=rows+current-1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }

// ***********************************************************************************************************

// Print Hourglass Pattern

// const row = 5;

// for (let i = 1; i <= row * 2 - 1; i++) {
//   let star = "";

//   for (let j = row * 2 - 1; j >= 1; j--) {
//     if (j >= i) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// const rows = 5;

// for (let i = rows * 2 - 1; i >= 1; i--) {
//   let star = "";

//   let current = i < rows ? rows - i + 1 : i - rows + 1;

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j == rows || (j >= rows - current + 1 && j <= rows - 1 + current)) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }

// let rows = 5;

// for (let i = rows * 2 - 1; i >= 1; i--) {
//   let star = "";

//   let current = i < rows ? rows - i + 1 : i - rows + 1;

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j >= rows - current + 1 && j <= rows + current - 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// ***********************************************************************************************************

// Print Hollow Diamond

// const rows = 3;

// for (let i = 1; i <= rows * 2 - 1; i++) {
//   let star = "";

//   let current = i <= rows ? i : rows * 2 - i;

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j == rows - current + 1 || j == rows + current - 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// ***********************************************************************************************************

// Print Rhombus Pattern

// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let star = "";

//   for (let j = 1; j <= rows * 2 - 1; j++) {
//     if (j >= rows - i + 1 && j <= rows * 2 - i) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }

//   console.log(star);
// }

// ***********************************************************************************************************

// Print Multiplication Table (Single)

// const number = 10;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// ***********************************************************************************************************

// Print Multiplication Table (Upto N)

const number = 5;

for (let i = 1; i <= number; i++) {
  console.log(`Table of ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j} `);
  }

  console.log("...................");
}
