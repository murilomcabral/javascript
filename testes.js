const arr1 = [3,4]

function sum(a,b) {
   return Math.sqrt((a**2)+(b**2))
}
console.log(sum(...arr1))

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