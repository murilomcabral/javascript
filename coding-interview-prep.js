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

//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// function sortArray(array) {
//   let arrCopy = array.slice()
//   arrCopy = arrCopy.filter(e => e % 2 != 0).sort((a, b) => a - b)
//   let j = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       array[i] = arrCopy[j]
//       j++
//     }
//   }
//   return array
// }

// let testList = [
//   [7, 1],
//   [5, 8, 6, 3, 4],
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// ]

// testList.forEach(e => console.log(sortArray(e)))

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// function solution(str){
//   if (str.length % 2 != 0) str += '_'
//   let reg = new RegExp(/([a-z]{2})/i)
//   return str.split(reg).filter(e => e != '')
// }

// let testList = [
//   'abc',
//   'abcdef'
// ]

// testList.forEach(e => console.log(solution(e)))

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// function descendingOrder(n){
//   return Number(String(n).split('').sort().reverse().join(''))
// }

// let testList = [
//   42145,
//   145263,
//   123456789
// ]

// testList.forEach(e => console.log(descendingOrder(e)))

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
// };

// let testList = [
//   "How can mirrors be real if our eyes aren't real"
// ]

// testList.forEach(b => console.log(b.toJadenCase()))

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// function toCamelCase(str) {
//   let arr = str.split(/[^a-z]+/i)
//   let l = String(arr[0][0])

//   if (l === l.toUpperCase()) {
//     return arr.map(e => e[0].toUpperCase() + e.slice(1)).join('')
//   }

//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//   }

//   return arr.join('')
// }

// let testList = [
//   "the-stealth-warrior",
//   "The_Stealth_Warrior",
//   "The_Stealth-Warrior",
//   "A-B-C",
//   "the_Pippi_is-Savage",
//   "the-pippi-is-Omoshiroi",
//   "a-cat-was-pippi",
//   "a_Cat_Was-Omoshiroi"
// ]

// testList.forEach(e => console.log(toCamelCase(e)))

//https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript

// function reverseMiddle(array) {
//   const m = Math.floor(array.length / 2)
//   return array.length % 2 === 0 ? [array[m], array[m - 1]] : [array[m + 1], array[m], array[m - 1]]
// }

// let testList = [
//   [60, 29, 91, 38, 33, -67, -78, -51, 36, 91, 98, -91, 77, 56, -29, 89, -2, -25, 58, 34, -3, -76, 19, -58, 95, 74, -53, -42, 67, -73, 20, 87, 84, 87, 51, 100, 0],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6, 7]
// ]

// testList.forEach(e => console.log(reverseMiddle(e)))//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// function sortArray(array) {
//   let arrCopy = array.slice()
//   arrCopy = arrCopy.filter(e => e % 2 != 0).sort((a, b) => a - b)
//   let j = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       array[i] = arrCopy[j]
//       j++
//     }
//   }
//   return array
// }

// let testList = [
//   [7, 1],
//   [5, 8, 6, 3, 4],
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// ]

// testList.forEach(e => console.log(sortArray(e)))

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// function solution(str){
//   if (str.length % 2 != 0) str += '_'
//   let reg = new RegExp(/([a-z]{2})/i)
//   return str.split(reg).filter(e => e != '')
// }

// let testList = [
//   'abc',
//   'abcdef'
// ]

// testList.forEach(e => console.log(solution(e)))

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// function descendingOrder(n){
//   return Number(String(n).split('').sort().reverse().join(''))
// }

// let testList = [
//   42145,
//   145263,
//   123456789
// ]

// testList.forEach(e => console.log(descendingOrder(e)))

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
// };

// let testList = [
//   "How can mirrors be real if our eyes aren't real"
// ]

// testList.forEach(b => console.log(b.toJadenCase()))

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// function toCamelCase(str) {
//   let arr = str.split(/[^a-z]+/i)
//   let l = String(arr[0][0])

//   if (l === l.toUpperCase()) {
//     return arr.map(e => e[0].toUpperCase() + e.slice(1)).join('')
//   }

//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//   }

//   return arr.join('')
// }

// let testList = [
//   "the-stealth-warrior",
//   "The_Stealth_Warrior",
//   "The_Stealth-Warrior",
//   "A-B-C",
//   "the_Pippi_is-Savage",
//   "the-pippi-is-Omoshiroi",
//   "a-cat-was-pippi",
//   "a_Cat_Was-Omoshiroi"
// ]

// testList.forEach(e => console.log(toCamelCase(e)))

//https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript

// function reverseMiddle(array) {
//   const m = Math.floor(array.length / 2)
//   return array.length % 2 === 0 ? [array[m], array[m - 1]] : [array[m + 1], array[m], array[m - 1]]
// }

// let testList = [
//   [60, 29, 91, 38, 33, -67, -78, -51, 36, 91, 98, -91, 77, 56, -29, 89, -2, -25, 58, 34, -3, -76, 19, -58, 95, 74, -53, -42, 67, -73, 20, 87, 84, 87, 51, 100, 0],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6, 7]
// ]

// testList.forEach(e => console.log(reverseMiddle(e)))

//https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/javascript

function stonePick(arr) {
  let sticks = 0
  let cobblestone = 0

  for (let obj of arr) {
    if (obj === "Sticks") sticks++
    if (obj === "Wood") sticks += 4
    if (obj === "Cobblestone") cobblestone++
  }

  let pickaxeCount = 0

  let i = 0
  while (sticks >= 2 && cobblestone >= 3) {
    sticks -= 2
    cobblestone -= 3
    pickaxeCount++
    i++
  }

  return pickaxeCount;
}

let testList = [
  ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"],
  ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"],
  ["Sticks", "Wool", "Cobblestone"],
  ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]
]

testList.forEach(e => console.log(stonePick(e)))