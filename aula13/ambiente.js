let num = 5
let text = '...'

while (num != 0) {
   console.log(`${num}${text}`)
   num--
}

do {
   console.log(`Teste ${text} ${num}`)
   num--
} while (num != -5)