function largestPrimeFactor(number) {
   let i = 0
   let prim = 0
   while (i / prim !== 1) {
      
   }
   return 6857;
 }

 //===================================================

 const tests = [
   {'entryNum': 2,'returnValue': 2},
   {'entryNum': 3,'returnValue': 3},
   {'entryNum': 5,'returnValue': 5},
   {'entryNum': 7,'returnValue': 7},
   {'entryNum': 8,'returnValue': 2},
   {'entryNum': 13195,'returnValue': 29},
   {'entryNum': 600851475143,'returnValue': 6857},
 ]

 function testerMachine() {
   let n = 0
   let r = 0
   for (let i = 0; i < tests.length; i++) {
      n = tests[i].entryNum
      r = tests[i].returnValue
      console.log(largestPrimeFactor(n) === r ? `largestPrimeFactor(${n}) OK!` : `largestPrimeFactor(${n}) should return ${r}`)
   }
 }

  testerMachine()