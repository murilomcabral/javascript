// need to learn
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//Spread

// const array1 = [1, 2, 3]
// const array2 = [5, 2, 1, 4]

// const diff = (arr1, arr2) => [
//    ...arr1.filter(e => !arr2.includes(e)),
//    ...arr2.filter(e => !arr1.includes(e))
//  ];
 
//  const sym = (...args) => [...new Set(args.reduce(diff))];

function multiplesOf3and5(number) {
   let arrNum = []
   for (let i = 1; i < number; i++) {
     if (i % 3 === 0 || i % 5 === 0) {
       arrNum.push(i)
     }
   }
   let res = arrNum.reduce((accumulator, current) => accumulator + current, 0);
   return res
 }

 console.log(multiplesOf3and5(5))


// const col = document.querySelector('button[type=submit]')
// col.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

//'https://stackoverflow.com/questions/11568722/more-efficient-way-to-do-parent-parent-parent-etc-in-jquery'