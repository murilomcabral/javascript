let num = 5
let text = '...'

while (num != 0) {
   console.log(`${num}${text}`)
   num--
}

do {
   console.log(`Bora lá ${text} ${num}`)
   num--
} while (num != 0)