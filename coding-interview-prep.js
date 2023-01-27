// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5

function multiplesOf3and5(number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i%3 === 0 || i%5 === 0) {
      sum += i
    }
  }
  return sum;
}

multiplesOf3and5(1000);

//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers

function fiboEvenSum(n) {
  const arr = []
  let pri = 0
  let sec = 1
  let mid
  for (let i = 0; sec < n; i++) {
    mid = pri + sec
    pri = sec
    sec = mid
    arr.push(sec)
  }
  let sum = 0
  for (let n of arr) {
    if (n%2 === 0) {
      sum += n;
    }
  }
  return sum
}