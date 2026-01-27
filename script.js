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

function invertedRATriangle(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    for (let j = i; j >= i; j--) {
      star += "*";
    }
    console.log(star);
  }
}

console.log(invertedRATriangle(5));
