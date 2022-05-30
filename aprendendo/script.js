let contaNota = document.getElementById('contaNota')
let nota = document.querySelector('input#nota')
let lista = document.querySelector('select#lista')
let bNotas = []
let nNota = 1

function teste1(n) {
   if (n >= 1 && n <= 10) {
      return true
   } else {
   return false
   }
}

function teste2(l) {
   if (l <= 4) {
      return true
   } else {
      return false
   }
}

function cadastrar() {
   if (teste1(nota.value) && teste2(bNotas.length)) {
         nNota++
         bNotas.push(nota.value)
         contaNota.textContent = `${nNota}`
         bNotas.push(nota.value)      
      } else {
         window.alert(`Digite um valor válido.[${nota.value} inválido]`)
      }
      nota.value = ''
      nota.focus()
   }
   
   //corrigir código - o objetivo seria limitar a quantidade de notas cadastradas a 4 notas e mostrar o resultado após a validação da quarta nota.