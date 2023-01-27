// function teste() {
//   let arr = []
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i])
//   }
//   console.log(arr)
// }

// teste([1,2,3],[2,7,8,9],[2,8,4,6])

function fiboEvenSum(n) {
  const arr = []
  let s
  let i = 0
  while (i < n) {
    s += n
  }
  i++
  for (let num of n) {
    let sum
    if (num%2 === 0) {
      sum += num
    }
  }
  console.log(s)
  // return sum;
}

fiboEvenSum(20)