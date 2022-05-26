let cNota = document.getElementById('contaNota')
let nota = document.querySelector('input#nota')
let bNotas = []
let n = 1

function cadastrar() {
   do {
         if (nota.value >= 0 && nota.value <= 10) {
         n++
         cNota.textContent = `${n}`
         bNotas.push(nota.value)      
      } else {
         window.alert(`Digite um valor válido.[${nota.value} inválido]`)
      }
      nota.value = ''
      nota.focus()
   } while (bNotas.length < 4) //corrigir código - o objetivo seria limitar a quantidade de notas cadastradas a 4 notas e mostrar o resultado após a validação da quarta nota.
}