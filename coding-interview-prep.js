// need to learn
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//Spread

const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e))
];

console.log(new Set(diff([10, 5, 7], [7, 12, 5, 11 ,12])))

const sym = (...args) => [...new Set(args.reduce(diff))];


// test here
console.log('=========================')
console.log('Spread operator:')
console.log(sym([1, 2, 3], [5, 2, 1, 4]))
console.log('=========================')

console.log([...new Set([1, 2, 3].concat([5, 2, 1, 4]))])

// const col = document.querySelector('button[type=submit]')
// col.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

//'https://stackoverflow.com/questions/11568722/more-efficient-way-to-do-parent-parent-parent-etc-in-jquery'