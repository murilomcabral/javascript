function teste() {
  let arr = []
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i])
  }
  console.log(arr)
}

teste([1,2,3],[2,7,8,9],[2,8,4,6])