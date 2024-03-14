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

