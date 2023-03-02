const randomNumberGenerator = (columns, rows) => {
   let matrix = [];
 
   // Generate a 2D array with 8 columns and 9 rows
   for (let i = 0; i < columns; i++) {
     let row = [];
     for (let j = 0; j < rows; j++) {
       row.push(Math.floor(Math.random() * 90) + 1);
     }
     matrix.push(row);
   }
 
   // Insert a blank row every 3 rows
   let output = [];
   for (let i = 0; i < columns; i++) {
     for (let j = 0; j < rows; j++) {
       if ((j+1) % 3 === 0) {
         output.push('');
       }
       output.push(matrix[i][j]);
     }
   }
 
   return output;
 };


// const diff = (arr1, arr2) => [
//    ...arr1.filter(e => !arr2.includes(e)),
//    ...arr2.filter(e => !arr1.includes(e))
//  ];
 
//  const sym = (...args) => [...new Set(args.reduce(diff))];
 
//  // test here
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
 
// function largestPrimeFactor(number) {
//    let prim = 2
//    while (number/prim > 1) {
//       if(number % prim === 0) {
//          number /= prim
//       } else {prim++}
//    }
//    return prim;
//  }

//  //#region Teste

//  const tests = [
//    {'entryNum': 2,'returnValue': 2},
//    {'entryNum': 3,'returnValue': 3},
//    {'entryNum': 5,'returnValue': 5},
//    {'entryNum': 7,'returnValue': 7},
//    {'entryNum': 8,'returnValue': 2},
//    {'entryNum': 13195,'returnValue': 29},
//    {'entryNum': 600851475143,'returnValue': 6857},
//  ]

//  function testerMachine() {
//    let n = 0
//    let r = 0
//    for (let i = 0; i < tests.length; i++) {
//       n = tests[i].entryNum
//       r = tests[i].returnValue
//       console.log(largestPrimeFactor(n) === r ? `largestPrimeFactor(${n}) OK!` : `largestPrimeFactor(${n}) should return ${r}`)
//    }
//  }

//   testerMachine()

//   //#endregion 