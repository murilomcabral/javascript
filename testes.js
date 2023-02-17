const regExp = new RegExp('[0-9]{4}','g')

function regexFilter(str) {
   return str.match(regExp)[0]
}
let phrase = 'Concurso 2145 de 24/02/1980'
console.log(regexFilter(phrase))