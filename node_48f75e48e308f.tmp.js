function fiboEvenSum(n) {
   let i = 0
   let p1 = 1
   let p2 = 2
   let sum = 0
   while(i <= n) {
     n = p1 + p2
     p1 = p2
     p2 = n    
   if (n % 2 === 0) {
      sum += n
   }
     i++
   }
   return sum;
 }

 //===================================================

 const tests = [
   {'entryNum': 8,'returnValue': 10},
   // {'entryNum': 10,'returnValue': 10},
   // {'entryNum': 34,'returnValue': 44},
   // {'entryNum': 60,'returnValue': 44},
   // {'entryNum': 1000,'returnValue': 798},
   // {'entryNum': 100000,'returnValue': 60696},
   // {'entryNum': 4000000,'returnValue': 4613732},
 ]

 function testerMachine() {
   let n = 0
   let r = 0
   for (let i = 0; i < tests.length; i++) {
      n = tests[i].entryNum
      r = tests[i].returnValue
      console.log(fiboEvenSum(n) === r ? `fiboEvenSum(${n}) OK!` : `fiboEvenSum(${n}) should return ${r}`)
   }
 }

  testerMachine()